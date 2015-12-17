var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    AdventureIndex = require('./components/adventure_index.jsx'),
    App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}>
  </Route>
)

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root)
})
