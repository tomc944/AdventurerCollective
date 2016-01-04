var React = require('react');

var StarredAdventures = React.createClass({
  onClick: function(e) {
    e.preventDefault();
    this.toggleCompletion();
  },
  toggleCompletion: function() {
    if (this.props.completed !== null) {
      debugger
      this.props.completed = null;
    } else {
      debugger
      this.props.completed = true;
    }
  },
  render: function() {
    return (
      <div onClick={this.onClick}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = StarredAdventures;
