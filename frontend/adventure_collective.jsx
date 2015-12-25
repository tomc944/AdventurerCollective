var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Search = require('./components/search.jsx');
var AdventureForm = require('./components/adventures/adventure_form.jsx');
var AdventureDetail = require('./components/adventures/adventure_detail.jsx');
var User = require('./components/user');
var App = require('./components/app');

var routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="adventures/new" component={AdventureForm} />
      <Route path="adventures/:adventureId" component={AdventureDetail} />
      <Route path="current_user" component={User} />
    </Route>
  </Router>
);

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  if (root) {ReactDOM.render(routes, root);}
});
