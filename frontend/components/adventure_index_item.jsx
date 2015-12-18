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
      <tr key={this.props.id} onClick={this.showAdventure}>
        <td>{this.props.description}</td>
      </tr>
    );
  }
});

module.exports = AdventureIndexItem;
