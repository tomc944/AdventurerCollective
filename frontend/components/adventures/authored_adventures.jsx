var React = require('react');

var AuthoredAdventures = React.createClass({
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
