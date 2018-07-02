// generator.js

function() {
function createElement(tag, options) {
  this.node = document.createElement(tag);
  this.setAttribute = function(name, value) {
    this.node.setAttribute(name, value);
    return this;
  }
  if (!options) options = {};
  for (var key in options) {
    this.setAttribute(key,options[key]);
  }
  this.append = function(parent) {
    parent.appendChild(this.node);
    this.parent = parent;
    return this;
  }
  this.prepend = function(parent) {
    parent.insertBefore(this.node, parent.firstChild);
    this.parent = parent;
    return this;
  }
  this.appendChild = this.node.appendChild;
  this.insertBefore = this.node.insertBefore;
  return this;
}

const root = document.getElementById("root");

function app() {
  this.root = createElement('form',{'class':'form-root'}).append(root);
  this.options = {
    configuration: createElement('select').append(this.root),
    verboose: createElement('input',{'type':'checkbox'}).append(this.root),
    save: createElement('input',{'type':'submit'}).append(this.root)
  };
  return this;
}

var appRoot = app();
}();
