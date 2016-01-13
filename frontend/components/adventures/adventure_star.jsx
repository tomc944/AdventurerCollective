var React = require('react');
var starUtil = require('../../util/star_adventure_util');

var AdventureStar = React.createClass({
  createStarred: function() {
    var user_adventure = {adventure_id: this.props.id}
    starUtil.createStarred(user_adventure)
  },

  render: function() {
    return (
      <div className="adventure-index-item-star"
        onClick={this.createStarred}>
        <i className="fa fa-star">
        </i>
      </div>

    )
  }
})

module.exports = AdventureStar
