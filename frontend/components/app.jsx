var React = require('react'),
    Index = require('./index'),
    Map = require('./map');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <Map />
        <Index />
      </div>
    );
  }
});

module.exports = App;
