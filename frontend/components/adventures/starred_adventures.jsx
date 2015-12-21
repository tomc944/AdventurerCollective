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
    var allTags = this.props.taggings.map(function(tag, i) {
      return (<li key={i} onClick={this.showStarred}>{tag.pursuit}</li>);
    });

    return (
      <div>
        <div>
          <h5>{this.props.title}</h5>
          <h6>Activities Availables</h6>
          {allTags}
        </div>
      </div>
    );
  }
});

module.exports = StarredAdventures;
