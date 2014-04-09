var Blarney = require('blarney');
var Select = require('select');
var Autosearch = require('shoelace-ui-autosearch');

var bl = new Blarney();

function main() {
  var
    as = new Autosearch(),
    numNames = 100,
    container = document.body.querySelector('.container'),
    i;

  as.label('Type things');

  for (i = 0; i < numNames; i++) {
    as.add(bl.name());
  }

  container.appendChild(as.el);
}

window.addEventListener('DOMContentLoaded', main);

