var React = require('react');
var AdventureStore = require('../../stores/adventure');
var apiUtil = require('../../util/api_util.js');
var Link = require('react-router').Link;
var AdventureIndexItem = require('./adventure_index_item');

var AdventureIndex = React.createClass({
  render: function() {
    var that = this;
    var adventureKeys = Object.keys(this.props.adventures);

    var adventureList = adventureKeys.map(function(adventureKey) {
      var adventure = that.props.adventures[adventureKey];
      return (
        <AdventureIndexItem
          key={adventure.id}
          id={adventure.id}
          title={adventure.title}
          description={adventure.description}
          lat={adventure.lat}
          lng={adventure.lng}
          tagging={adventure.activities}
          imageUrl={adventure.images[0].url} />
      );
    });

    return (
      <div className="adventure-index-items-container">
        <ul className="adventure-index-items-list">
          {adventureList}
        </ul>
      </div>
    );
  }
});

module.exports = AdventureIndex;
