var React = require('react');
var AdventureStore = require('../../stores/adventure');
var Navbar = require('../navbar');
var LocalStorageMixin = require('react-localstorage');
var Map = require('../map');
var apiUtil = require('../../util/api_util');
var Images = require('../images/images');

var AdventureDetail = React.createClass({
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return ({adventure: this.findFromStore()});
  },
  findFromStore: function() {
    return (AdventureStore.find(parseInt(this.props.params.adventureId)));
  },
  componentDidMount: function() {
    apiUtil.fetchAdventure(this.props.params.adventureId)
    this.token = AdventureStore.addListener(this._onChange);
  },
  _onChange: function() {
    this.setState({adventure: this.findFromStore()});
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  componentWillReceiveProps: function(newProps) {
    apiUtil.fetchAdventure(parseInt(newProps.params.adventureId));
  },
  allActivities: function() {
    var activities = this.state.adventure.activities;

    var pursuits = activities.map(function(activity, i){
      return (<li key={i}>{activity.pursuit}</li>);
    });

    return (pursuits);
  },
  render: function() {
    if (typeof this.state.adventure === 'undefined') {
      return (<div></div>);
    } else {
      var id = this.state.adventure.id;
      var adventureObject = {};
      adventureObject[id] = this.state.adventure;
      return (
        <div>
          <Navbar />
          <Images adventureId={this.props.params.adventureId}
                  adventures={adventureObject}/>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.state.adventure.title}</h3>
            </div>
            <div className="panel-body">
              {this.state.adventure.description}
              <ul>
                <h4>Activites:</h4>
                {this.allActivities()}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = AdventureDetail;
