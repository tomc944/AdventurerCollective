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
  onMouseOver: function() {
    this.setState({showActivities: true});
  },
  onMouseLeave: function() {
    this.setState({showActivities: false});
  },
  getInfo: function(){
    if(this.state.showActivities){
      return  <td>{this.props.tagging[0].pursuit}</td>;
    } 
  },
  render: function() {
    return (

      <tr key={this.props.id} onClick={this.showAdventure}>
        <td onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          {this.props.title}
        </td>
        {this.getInfo() }
      </tr>

    );
  }
});

module.exports = AdventureIndexItem;
