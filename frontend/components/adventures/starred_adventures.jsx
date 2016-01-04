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
    // var allTags = this.props.taggings.map(function(tag, i) {
    //   return (<li key={i} onClick={this.showStarred}>{tag.pursuit}</li>);
    // });
    if (this.props.completed !== null) {
      var completed = this.props.title
    }

    if (this.props.inProgress !== null) {
      var inProgress = this.props.title
    }

    return (
      <div>
        <h3>Completed Adventures</h3>
        {completed}
        <h3>In Progress Adventures</h3>
        {inProgress}
      </div>
    );
  }
});

module.exports = StarredAdventures;
