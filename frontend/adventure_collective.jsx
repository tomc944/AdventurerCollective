var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  if (root) {ReactDOM.render(Routes, root);}
});
