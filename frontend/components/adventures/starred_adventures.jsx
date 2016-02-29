var React = require('react');
var starAdventureUtil = require('../../util/star_adventure_util');

var StarredAdventures = React.createClass({
  toggleCompleted: function() {
    starAdventureUtil.editStarred(this.props.id, !this.props.completed)
  },
  render: function() {
    var starredAdventureClass = 'btn btn-primary btn2'

    if (this.props.completed) {
      var starredAdventureId = "inprogress-button"
    } else {
      starredAdventureId = "completed-button"
    }

    return (
      <div>
        {this.props.title}
        <button onClick={this.toggleCompleted} className={starredAdventureClass}
                id={starredAdventureId}>
          {this.props.marked}
        </button>
      </div>
    );
  }
});

module.exports = StarredAdventures;
