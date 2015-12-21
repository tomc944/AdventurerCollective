var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;

var StarredAdventures = React.createClass({
  mixins: [History],
  showStarred: function() {
    var adventureUrl = 'adventures/' + this.props.id;
    apiUtil.fetchAdventure(this.props.id);
    this.history.push(adventureUrl);
  },
  render: function() {
    return (
      <div>
        <li onClick={this.showStarred}>{this.props.title}</li>
      </div>
    );
  }
});

module.exports = StarredAdventures;
