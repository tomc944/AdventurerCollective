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
    if (this.state.user.starred_adventures) {
      var StarList = this.state.user.starred_adventures.map(function (adventure){
        return (
          <StarredAdventures
            key={adventure.id}
            id={adventure.id}
            title={adventure.title}
            />
        );
      });
    }
    if (this.state.user.authored_adventures) {
      var AuthorList = this.state.user.starred_adventures.map(function (adventure){
        return (
          <AuthoredAdventures
            key={adventure.id}
            id={adventure.id}
            title={adventure.title}
            />
        );
      });
    }
    return (
      <div>
        <Navbar />
        <h2>Authored Adventures</h2>
        {AuthorList}
        <h2>Starred Adventures</h2>
        {StarList}
      </div>
    );
  }
});

module.exports = User;
