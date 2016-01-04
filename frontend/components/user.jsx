var React = require('react');
var UserStore = require('../stores/user');
var userUtil = require('../util/user_api_util.js');
var Navbar = require('./navbar');
var AuthoredAdventures = require('./adventures/authored_adventures');
var StarredAdventures = require('./adventures/starred_adventures');
var UserAdventures = require('./adventures/user_adventures');

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
      var StarList = this.state.user
                     .starred_adventures.map(function (adventure){
        return (
          <StarredAdventures
            key={adventure.id}
            id={adventure.id}
            title={adventure.title}
            taggings={adventure.taggings}
            />
        );
      });
    }
    if (this.state.user.authored_adventures) {
      var AuthorList = this.state.user
                       .authored_adventures.map(function (adventure){

        return (
          <AuthoredAdventures
            key={adventure.id}
            id={adventure.id}
            title={adventure.title}
            taggings={adventure.taggings}
            />
        );
      });
    }

    if (this.state.user.user_adventures) {
      var UserAdventureList = this.state.user
                              .user_adventures.map(function (adventure) {

        return (
          <UserAdventures
            key={adventure.id}
            id={adventure.id}
            adventureId={adventure.adventure_id}
            adventureeId={adventure.adventuree_id}
            completed={adventure.completed}
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
        <h2>User Adventures</h2>
        {UserAdventureList}
      </div>
    );
  }
});

module.exports = User;
