# generator-polymer-init-element-seed
> Polymer2.0 simple element generator 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-polymer-init-element-seed using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-polymer-init-element-seed
```

Then generate your new project:

```bash
yo polymer-init-element-seed
```

## Element 
You can create a simple Polymer2.0 element, with no iron-page and the stuff you can create in 
production mode development, as is a speed dev option for create a base bone Polymer 2.0 element, 
here the skeleton for the element : 

```javascript

<!-- Load the Polymer.Element base class -->
<link rel="import" href="bower_components/polymer/polymer-element.html">

<dom-module id="my-element">
  <template>

    <!-- Style -->
    <style>

      :host {
        display: block;
      }

    </style>
    <h2>Name : [[name]]</h2>

    <slot></slot>

  </template>
  
  <script>

    // Extend Polymer.Element base class
    class MyElement extends Polymer.Element {
      
      static get is(){ return 'my-element' }
      
      static get config(){
        // properties, observers meta data
        return {
          properties: {
            name: {
              type: String,
              value: 'my-element',
              observer: '_nameChanged'
            }
          }
        };
      }

      connectedCallback(){
        super.connectedCallback();
 
      }

      disconnectedCallback(){

      }

      attributeChangeCallback(){

      }

      _nameChanged(name, oldName){
        // dirty check 
        
        // if(oldProp1) ... 
        // if(prop1) ... 

        // Select the elements 
        // this.$.
        // this.$.
      }


    }
    
    // Register custom element definition using standard platform API
    customElements.define(MyElement.is, MyElement);
  </script>
</dom-module>

```

## Up and Running 
To up and running the environment and the Polymer 2.0 custom element just created follow these simple 
steps : 

```bash 
mkdir your_project && cd $_
bower init 
bower install --save polymer/polymer#2.0-preview
```

create a index.html file where to insert the Polymer2.0 custom element just created with the 
generator, this is an example of file : 

```html 
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Polymer element - Test </title>

  <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>

  
  <link rel="import" href="my-element.html">
  

</head>

<body>

  <my-element></my-element>

  <script>

    // Javascript power goes here 
    
  </script>

</body>
</html>

```

Launch a simple web server to see the Polymer2.0 custom element in action, (here we use the simple 
python simple server) : 

```bash
cd your_project 
python -m SimpleHTTPServer 8080 
```

Open the browser and navigate the address **localhost:8080** ! 


## Important 
That's it, this is a semplified version of the developer/building process, it's use in production 
it's not recommended ! 


## License

MIT © [@cicciosgamino](http://cicciosgamino.github.io/)


[npm-image]: https://badge.fury.io/js/generator-polymer-init-element-seed.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-element-seed
[travis-image]: https://travis-ci.org/CICCIOSGAMINO/generator-polymer-init-element-seed.svg?branch=master
[travis-url]: https://travis-ci.org/CICCIOSGAMINO/generator-polymer-init-element-seed
[daviddm-image]: https://david-dm.org/CICCIOSGAMINO/generator-polymer-init-element-seed.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/CICCIOSGAMINO/generator-polymer-init-element-seed
