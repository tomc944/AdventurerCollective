var React = require('react');
var starUtil = require('../../util/star_adventure_util');
var StarStore = require('../../stores/starred');

var AdventureStar = React.createClass({
  getInitialState: function() {
    if (StarStore.find(this.props.id)) {
      var starred = true;
      var adventureStar = 'adventure-index-item-starred';
    } else {
      starred = false;
      adventureStar = 'adventure-index-item-not-starred';
    }
    return ({
        starred: starred,
        adventureStar: adventureStar
      })
  },
  toggleStarred: function(e) {
    e.preventDefault();
    if (this.state.starred) {
      starUtil.deleteStarred(this.props.id)
      this.setState({
        adventureStar: "adventure-index-item-not-starred",
        starred: false
      })
    } else {
      var user_adventure = {adventure_id: this.props.id}
      starUtil.createStarred(user_adventure)
      this.setState({
        adventureStar: "adventure-index-item-starred",
        starred: true
      })
    }
  },

  // checkStarred: function() {
  //   if (this.state.starred)) {
  //     this.adventureStar="adventure-index-item-starred"
  //   } else {
  //     this.adventureStar="adventure-index-item-not-starred"
  //   }
  // },
  render: function() {
    return (
      <div onClick={this.toggleStarred}
        className={this.state.adventureStar}>
        <i className="fa fa-star">
        </i>
      </div>

    )
  }
})

module.exports = AdventureStar
