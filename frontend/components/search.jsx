var React = require('react');
var Map = require('./map');
var Navbar = require("./navbar");
var AdventureIndex = require('./adventures/adventure_index');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <Map />
        <AdventureIndex />
      </div>
    );
  }
});

module.exports = Search;
