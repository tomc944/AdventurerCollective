var React = require('react');
var apiUtil = require('../util/api_util');
var History = require('react-router').History;

var AdventureIndexItem = React.createClass({
  mixins: [History],
  showAdventure: function() {
    var adventureUrl = 'adventures/' + this.props.id;
    apiUtil.fetchAdventure(this.props.id);
    this.history.push(adventureUrl);
  },
  componentWillReceiveProps: function(newProps) {
    var adventureId = parseInt(newProps.id, 10);
  },
  render: function() {
    return (
      <li onClick={this.showAdventure}>{this.props.description}</li>
    );
  }
});

module.exports = AdventureIndexItem;
