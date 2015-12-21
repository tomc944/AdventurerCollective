var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;

var AuthoredAdventures = React.createClass({
  mixins: [History],
  showAuthored: function() {
    var adventureUrl = 'adventures/' + this.props.id;
    apiUtil.fetchAdventure(this.props.id);
    this.history.push(adventureUrl);
  },
  render: function() {
    return (
      <div>
        <li onClick={this.showAuthored}>{this.props.title}</li>
      </div>
    );
  }
});

module.exports = AuthoredAdventures;
