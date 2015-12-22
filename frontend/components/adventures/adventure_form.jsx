var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Navbar = require('../navbar.jsx');
var Map = require('../map');
var AttrStore = require('../../stores/attrs');

var AdventureForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    description: '',
    author_id: '',
    lat: '',
    lng: '',
    activity_ids: []
  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  createAdventure: function(event) {
    event.preventDefault();
    var adventure = {};
    Object.keys(this.state).forEach(function(key) {
      adventure[key] = this.state[key];
    }.bind(this));
    ApiUtil.createAdventure(adventure, function(id) {
      this.history.pushState(null, '/adventure/' + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
    this.history.pushState(null, '/', {});
  },
  checkBox: function(id, e) {
    var boxIds = this.state.activity_ids;
    boxIds.push(id);
    this.setState({activity_ids: boxIds});
  },
  _onChange: function() {
    var newAttrs = AttrStore.all();
    this.setState({"lat": newAttrs.lat, "lng": newAttrs.lng });
  },
  componentDidMount: function() {
    this.adventureToken = AttrStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.adventureToken.remove();
  },
  render: function() {
    var activities = ['Hiking', 'Biking', 'Running', 'Swimming','Backpacking',
                      'Climbing', 'Surfing', 'Relaxation', 'Other'];

    var that = this;
    var checkboxes = activities.map(function(activity, id) {
      return (
      <div key={id} className="checkbox">
        <label>
          <input type="checkbox" onClick={that.checkBox.bind(null, id)}></input>
          {activity}
        </label>
      </div>);
    });

    return (
      <div>
        <Navbar />
        <form onSubmit={this.createAdventure} className="outerForm">
          <fieldset className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              valueLink={this.linkState('title')} />
          </fieldset>

          <fieldset className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              valueLink={this.linkState('description')} />
          </fieldset>

          <fieldset className="form-group">
            <label>Lat:</label>
            <input
              type="text"
              className="form-control"
              valueLink={this.linkState('lat')} />
          </fieldset>

          <fieldset className="form-group">
            <label>Lng:</label>
            <input
              type="text"
              className="form-control"
              valueLink={this.linkState('lng')} />
          </fieldset>

          <div>
            <label>Type of Adventure:</label>
            {checkboxes}
          </div>

          <br />
          <button className="btn btn-primary">Create an Adventure!</button>
          <br/>
        </form>
        <Map check={true}
             adventures={{}}/>
      </div>
    );
  }
});

module.exports = AdventureForm;
