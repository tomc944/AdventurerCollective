var React = require('react');
var starUtil = require('../../util/star_adventure_util');
var StarStore = require('../../stores/starred');
var classNames = require('classnames');

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
  componentWillReceiveProps: function(newProps) {
    if (StarStore.find(newProps.id)) {
      this.setState({ starred: true,
                      adventureStar: 'adventure-index-item-starred' })
    } else {
      this.setState({ starred: false,
                      adventureStar: 'adventure-index-item-not-starred' })
    }
  },
  toggleStarred: function(e) {
    e.preventDefault();
    if (this.state.starred) {
      starUtil.deleteStarred(this.props.id)
      this.setState({ starred: false })
    } else {
      var user_adventure = {adventure_id: this.props.id}
      starUtil.createStarred(user_adventure)
      this.setState({ starred: true })
    }
  },


  render: function() {
    var starClass = classNames({
      'adventure-index-item-starred': this.state.starred,
      'adventure-index-item-not-starred': !this.state.starred
    })

    return (
      <div onClick={this.toggleStarred}
        className={starClass}>
        <i className="fa fa-star">
        </i>
      </div>

    )
  }
})

module.exports = AdventureStar
