var React = require('react');

var StarredAdventures = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
});

module.exports = StarredAdventures;
