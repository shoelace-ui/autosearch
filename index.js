var Super = require('select');
var merge = require('merge');

function Autosearch() {
  Super.apply(this, arguments);
  this.el.className += ' autosearch';
  this.makeAccessible();
}

Autosearch.prototype = new Super();
Autosearch.prototype.constructor = Autosearch;

merge(Autosearch.prototype, {
  makeAccessible: function () {
    this.input.setAttribute('data-omg', 'wtf');
  }
});

module.exports = Autosearch;

