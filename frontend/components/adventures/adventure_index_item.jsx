var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;

var AdventureIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return ({showActivities: false});
  },
  showAdventure: function() {
    var adventureUrl = 'adventures/' + this.props.id;
    apiUtil.fetchAdventure(this.props.id);
    this.history.push(adventureUrl);
  },
  onMouseEnter: function() {
    this.setState({showActivities: true});
  },
  onMouseLeave: function() {
    this.setState({showActivities: false});
  },
  getInfo: function(){
    if(this.state.showActivities){
      return  ("Activities: " + this.getAllTags() + this.getStar());
    }
  },
  getAllTags: function() {
    // change to glyphs later...
    var allTags = [];

    this.props.tagging.map(function (tag){
      allTags.push(tag.pursuit);
    });
    return allTags.join(", ");
  },
  getStar: function() {
    if(this.state.showActivities){
      return (' \u2606');
    }
  },
  render: function() {
    var photoUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_200/" + this.props.imageUrl;

    var backgroundImage = {
      backgroundImage: "url(" + photoUrl + ")"
    }

    return (
      <li style={backgroundImage}
        className="adventure-index-item"
        onClick={this.showAdventure}>
      </li>
    );
  }
});

module.exports = AdventureIndexItem;
