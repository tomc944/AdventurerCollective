var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;
var UserStore = require('../../stores/user');
var userUtil = require('../../util/user_api_util');

var AdventureStar = React.createClass({
  getInitialState: function() {
    return ({user: UserStore.all()})
  },

  componentDidMount: function() {
    this.starToken = UserStore.addListener(this._onChange);
    userUtil.fetchUser();
  },

  componentWillUnmount: function() {
    this.starToken.remove();
  },

  _onChange: function() {
    this.setState({user: UserStore.all()});
  },

  onClick: function() {

  },

  render: function() {
    return (
      <i className="fa fa-star"
         onClick={this.onClick}>
      </i>
    )
  }
})

module.exports = AdventureStar
