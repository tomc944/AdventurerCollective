var React = require('react'),
    Map = require('./map'),
    Navbar = require("./navbar"),
    AdventureIndex = require('./adventure_index');

var Search = React.createClass({
  render: function() {
    return(
      <div>
        <Navbar />
        <Map />
        <AdventureIndex />
      </div>
    );
  }
});

module.exports = Search;
