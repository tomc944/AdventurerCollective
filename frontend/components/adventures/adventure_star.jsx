var React = require('react');
var starUtil = require('../../util/star_adventure_util');
var StarStore = require('../../stores/starred');

var AdventureStar = React.createClass({
  toggleStarred: function() {
    if (StarStore.find(this.props.id)) {
      starUtil.deleteStarred(this.props.id)
      this.adventureStar="adventure-index-item-not-starred"
    } else {
      var user_adventure = {adventure_id: this.props.id}
      starUtil.createStarred(user_adventure)
      this.adventureStar="adventure-index-item-starred"
    }
  },
  checkStarred: function() {
    if (StarStore.find(this.props.id)) {
      this.adventureStar="adventure-index-item-starred"
    } else {
      this.adventureStar="adventure-index-item-not-starred"
    }
  },
  render: function() {
    this.checkStarred();

    return (
      <div className={this.adventureStar}
        onClick={this.toggleStarred}>
        <i className="fa fa-star">
        </i>
      </div>

    )
  }
})

module.exports = AdventureStar
