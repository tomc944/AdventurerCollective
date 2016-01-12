var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;

var AdventureIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return ({showTitle: false});
  },
  showAdventure: function() {
    var adventureUrl = 'adventures/' + this.props.id;
    apiUtil.fetchAdventure(this.props.id);
    this.history.push(adventureUrl);
  },
  onMouseEnter: function() {
    this.setState({showTitle: true});
  },
  onMouseLeave: function() {
    this.setState({showTitle: false});
  },
  getInfo: function(){
    if(this.state.showTitle){
      return  (<div className="adventure-index-item-label-text">
                 <p>{this.props.title}</p>
               </div>);
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
    var photoUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_300/" + this.props.imageUrl;

    var backgroundImage = {
      backgroundImage: "url(" + photoUrl + ")"
    }

    if (this.state.showTitle) {
      var adventureClass = "adventure-index-item-title"
    } else {
      adventureClass = "adventure-index-item"
    }

    return (
      <li style={backgroundImage}
        className={adventureClass}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.showAdventure}>
        {this.getInfo()}
      </li>
    );
  }
});

module.exports = AdventureIndexItem;
