var React = require('react');
var starUtil = require('../../util/star_adventure_util');
var StarStore = require('../../stores/starred');
var classNames = require('classnames');

var AdventureStar = React.createClass({
  getInitialState: function() {
    return ({ starred: this.findFromStore() })
  },
  findFromStore: function() {
    return (StarStore.find(this.props.id))
  },
  componentWillMount: function() {
    this.starToken = StarStore.addListener(this._onChange)
  },
  componentWillUnmount: function() {
    this.starToken.remove();
  },
  _onChange: function() {
    this.setState({ starred: this.findFromStore() })
  },
  toggleStarred: function(e) {
    e.preventDefault();

    this.state.starred ? starUtil.deleteStarred(this.props.id)
                       : starUtil.createStarred({adventure_id: this.props.id})
  },
  render: function() {
    var starClass = classNames({
      'adventure-show-page-starred': this.state.starred && this.props.showPage,
      'adventure-show-page-not-starred': !this.state.starred && this.props.showPage,
      'adventure-index-item-starred': this.state.starred && this.props.index,
      'adventure-index-item-not-starred': !this.state.starred && this.props.index
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
