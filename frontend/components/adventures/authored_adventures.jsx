var React = require('react');

var AuthoredAdventures = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
});

module.exports = AuthoredAdventures;
