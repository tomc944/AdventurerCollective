var React = require('react');
var UserStore = require('../stores/user');
var userUtil = require('../util/user_api_util.js');
var Navbar = require('./navbar');
var AuthoredAdventures = require('./adventures/authored_adventures');
var StarredAdventures = require('./adventures/starred_adventures');
var UserAdventures = require('./adventures/user_adventures');
var Map = require('./map');

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
            completed={adventure.completed}
            inProgress={adventure.in_progress}
            />
        );
      });
    }

    return (
      <div>
        <Navbar />
        <div className="starred_adventures">
          <h2>Starred Adventures</h2>
          {StarList}
        </div>
        <Map adventures={this.state.user.starred_adventures}/>
      </div>
    );
  }
});

module.exports = User;
