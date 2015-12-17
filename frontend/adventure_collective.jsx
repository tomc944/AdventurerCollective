var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Search = require('./components/search.jsx'),
    AdventureForm = require('./components/adventure_form.jsx'),
    AdventureIndex = require('./components/adventure_index.jsx');

var App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="adventures/new" component={AdventureForm} />
  </Route>
)

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root)
})
