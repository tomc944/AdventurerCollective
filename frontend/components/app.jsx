var React = require('react'),
    AdventureIndex = require('./adventure_index'),
    Map = require('./map'),
    Navbar = require('./navbar');

var App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
