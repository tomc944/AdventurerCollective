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
    var allTags = this.props.taggings.map(function(tag, i) {
      return (<li key={i} onClick={this.showAuthored}>{tag.pursuit}</li>);
    });

    return (
      <div>
        <h5>{this.props.title}</h5>
        <h6>Activities Availables</h6>
        {allTags}
      </div>
    );
  }
});

module.exports = AuthoredAdventures;
