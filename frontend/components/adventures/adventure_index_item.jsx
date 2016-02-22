var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;
var AdventureStar = require('./adventure_star');

var AdventureIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return ({showTitle: false});
  },
  showAdventure: function(e) {
    if (this.checkStarClick(e)) {
      var adventureUrl = 'adventures/' + this.props.id;
      apiUtil.fetchAdventure(this.props.id);
      this.history.push(adventureUrl);
    }
  },
  checkStarClick: function(e) {
    var child = "adventure-index-item-starred"
    var other_child = "adventure-index-item-not-starred"
    var inner_child = "fa fa-star"
    return (e.target.className !== child && e.target.className !== other_child &&
        e.target.className !== inner_child)
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
  render: function() {
    if (this.props.imageUrl) {
      var photoUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_300/" + this.props.imageUrl;
    } else {
      photoUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_300/v1451927030/sample.jpg";
    }

    var backgroundImage = {
      backgroundImage: "url(" + photoUrl + ")"
    }

    return (
      <li style={backgroundImage}
        className="adventure-index-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.showAdventure}>
        {this.getInfo()}
        <AdventureStar id={this.props.id} key={this.props.id} index={true}/>
      </li>
    );
  }
});

module.exports = AdventureIndexItem;
