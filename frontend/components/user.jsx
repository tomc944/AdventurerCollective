var React = require('react');
var UserStore = require('../stores/user');
var userUtil = require('../util/user_api_util.js');
var Navbar = require('./navbar');
var AuthoredAdventures = require('./adventures/authored_adventures');
var StarredAdventures = require('./adventures/starred_adventures');
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
      this.state.user.starred_adventures.forEach(function (adventure){
        if (adventure.completed !== null) {
          this.completed =
            <StarredAdventures
              key={adventure.id}
              id={adventure.id}
              title={adventure.title}
              taggings={adventure.taggings}
              completed={adventure.completed}
              />
        } else {
          this.inProgress =
            <StarredAdventures
              key={adventure.id}
              id={adventure.id}
              title={adventure.title}
              taggings={adventure.taggings}
              completed={adventure.completed}
              />
        }
      }.bind(this));
    }

    return (
      <div>
        <Navbar />
        <div className="starred_adventures">
          <h2>Starred Adventures</h2>
          <h3 className="completed">Completed</h3>
          {this.completed}
          <h3 className="in_progress">In progress</h3>
          {this.inProgress}
        </div>
        <Map adventures={this.state.user.starred_adventures}/>
      </div>
    );
  }
});

module.exports = User;
