var React = require('react');
var AdventureStore = require('../stores/adventure');
var apiUtil = require('../util/api_util.js');
var Link = require('react-router').Link;
var AdventureIndexItem = require('./adventure_index_item');

var AdventureIndex = React.createClass({
  getInitialState: function() {
    return ({adventures: AdventureStore.all()});
  },
  _onChange: function() {
    this.setState({adventures: AdventureStore.all()});
  },
  componentDidMount: function() {
    this.adventureToken = AdventureStore.addListener(this._onChange);
    apiUtil.fetchAdventures();
  },
  componentWillUnmmount: function() {
    this.adventureToken.remove();
  },
  render: function() {
    var that = this;
    var adventureKeys = Object.keys(this.state.adventures);
    
    var adventureList = adventureKeys.map(function(adventureKey) {
      var adventure = that.state.adventures[adventureKey];
      return (
        <AdventureIndexItem
          key={adventure.id}
          id={adventure.id}
          title={adventure.title}
          description={adventure.description}
          lat={adventure.lat}
          lng={adventure.lng} />
      );
    });

    return (
      <div>
        <ul>
          {adventureList}
        </ul>
      </div>
    );
  }
});

module.exports = AdventureIndex;
