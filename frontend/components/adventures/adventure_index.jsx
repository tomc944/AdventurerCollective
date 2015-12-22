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
          tagging={adventure.activities} />

      );
    });

    return (
      <div className="table-responsive">
        <h2 className="sub-header">Adventures Near You!</h2>
        <table className="table table-striped">
          <tbody>
            {adventureList}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AdventureIndex;
