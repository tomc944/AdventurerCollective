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
    this.completed = [];
    this.inProgress = [];

    if (this.state.user.starred_adventures) {
      this.state.user.starred_adventures.forEach(function (adventure){
        if (adventure.completed === true) {
          this.completed.push(
            <StarredAdventures
              key={adventure.id}
              id={adventure.id}
              title={adventure.title}
              taggings={adventure.taggings}
              completed={adventure.completed}
              marked="Mark as Uncompleted"
              />)
        } else {
          this.inProgress.push(
            <StarredAdventures
              key={adventure.id}
              id={adventure.id}
              title={adventure.title}
              taggings={adventure.taggings}
              completed={adventure.completed}
              marked="Mark as Completed"
              />)
        }
      }.bind(this));
    }

    return (
      <div>
        <Navbar />
        <div className="main-div-2">
          <div className="starred-adventures">
          <h2>Starred Adventures</h2>
          <h3 className="completed">Completed</h3>
          {this.completed}
          <h3 className="in_progress">In progress</h3>
          {this.inProgress}
          </div>
          <Map adventures={this.state.user.starred_adventures}
            mapClassName='map-form'/>
        </div>
      </div>
    );
  }
});

module.exports = User;
