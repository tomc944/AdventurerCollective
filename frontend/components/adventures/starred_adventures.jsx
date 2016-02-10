var React = require('react');
var starAdventureUtil = require('../../util/star_adventure_util');

var StarredAdventures = React.createClass({
  toggleCompleted: function() {
    starAdventureUtil.editStarred(this.props.id, this.props.completed)
  },
  render: function() {
    return (
      <div>
        {this.props.title}
        <button onClick={this.toggleCompleted}></button>
      </div>
    );
  }
});

module.exports = StarredAdventures;
