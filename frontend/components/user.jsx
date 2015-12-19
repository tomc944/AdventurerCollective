var React = require('react');
var UserStore = require('../stores/user');
var userUtil = require('../util/user_api_util.js');
var Navbar = require('./navbar');
var AuthoredAdventures = require('./adventures/authored_adventures');
var StarredAdventures = require('./adventures/starred_adventures');

var User = React.createClass({
  getInitialState: function() {
    return ({user: UserStore.all()});
  },
  _onChange: function() {
    this.setState({user: UserStore.all()});
  },
  componentDidMount: function() {
    this.userToken = UserStore.addListener(this._onChange);
    userUtil.fetchUser();
  },
  componentWillUnmount: function() {
    this.userToken.remove();
  },
  render: function() {
    return (
      <div>
        <Navbar />
        <AuthoredAdventures />
        <StarredAdventures />
      </div>
    );
  }
});

module.exports = User;
