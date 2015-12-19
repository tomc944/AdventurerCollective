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
  render: function() {
    return (
      <tr key={this.props.id} onClick={this.showAdventure}>
        <td>{this.props.title}</td>
      </tr>
    );
  }
});

module.exports = AdventureIndexItem;
