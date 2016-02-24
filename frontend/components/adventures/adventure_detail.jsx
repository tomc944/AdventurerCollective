var React = require('react');
var AdventureStore = require('../../stores/adventure');
var Navbar = require('../navbar');
var LocalStorageMixin = require('react-localstorage');
var Map = require('../map');
var apiUtil = require('../../util/api_util');
var Images = require('../images/images');
var AdventureStar = require('./adventure_star');

var AdventureDetail = React.createClass({

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
      return (<span key={i} className="label label-primary tags">{activity.pursuit}</span>);
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

          <div className="panel2 panel-default2">

            <div className="panel-heading2">
              <h3 className="panel-title">{this.state.adventure.title}</h3>
              <AdventureStar id={this.state.adventure.id} key={this.state.adventure.id}
                             showPage={true}/>
            </div>
            <div className="panel-body">

              <Images adventureId={this.props.params.adventureId}
                      adventures={adventureObject}/>

              <p className='adventure-detail'>{this.state.adventure.description}</p>

              <h4 className='activity-title'>Activites</h4>
              {this.allActivities()}
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = AdventureDetail;
