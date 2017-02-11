'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the finest ' + chalk.red('generator-polymer-init-element-seed') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'elementName',
      message: 'What would you like your element to be called ?',
      default: 'my-element'
    }
    
    ];

    return this.prompt(prompts).then(function (props) {
      
      // Prere the className eg  my-element > MyElement 
      props.className = props.elementName.split('-').map(x => {
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
      }).join('');

      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    const elementName = this.props.elementName;
    const className = this.props.className;

    // copy all the files less that those starting with _
    // this.fs.copyTpl(
    //  `${this.templatePath()}/**/!(_)*`,
    //  this.destinationPath(),
    //  this.props
    // );

    // rename the files starting with _ 
    this.fs.copyTpl(
      this.templatePath('_my-element.html'),
      this.destinationPath(`${elementName}.html`),
      this.props
    );

  },

  // install: function () {
  //  this.installDependencies();
  // }
});
