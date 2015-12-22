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
      return  ("Activities: " + this.getAllTags());
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
  render: function() {
    return (

      <tr key={this.props.id} onClick={this.showAdventure}
          onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <td className="setFixed">
          {this.props.title}
        </td>
        <td className="aligned">{this.getInfo()}</td>
      </tr>

    );
  }
});

module.exports = AdventureIndexItem;
