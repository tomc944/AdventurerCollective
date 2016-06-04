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
    lat: '',
    lng: '',
    path: '',
    activity_ids: [],
    image_ids: []
  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  createAdventure: function(event) {
    event.preventDefault();
    var defaultPath = "sample.jpg"
    var adventure = {};

    Object.keys(this.state).forEach(function(key) {
      if (key === 'path' && this.state[key] === "") {
        adventure[key] = defaultPath
      } else {
        adventure[key] = this.state[key];
      }

    }.bind(this));

    ApiUtil.createAdventure(adventure, function(packagedAdventure) {
      debugger
      var url = '/adventures/' + packagedAdventure.id
      this.history.pushState({adventures: packagedAdventure}, url, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },
  checkBox: function(id, e) {
    var boxIds = this.state.activity_ids;
    this.setState({activity_ids: boxIds.concat([id+1])});
  },
  _onChange: function() {
    var newAttrs = AttrStore.all();
    this.setState({ "lat": newAttrs.lat, "lng": newAttrs.lng });
  },
  componentDidMount: function() {
    this.adventureToken = AttrStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.adventureToken.remove();
  },
  uploadImage: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: "dpdxfgx58", upload_preset: "lp8jhmdl"},
                                  function(error, results) {
      if (!error) {
        this.setState({ path: results[0].public_id });
      }
    }.bind(this));
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

    if (this.state.path === '') {
      var imageUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/w_100,h_100/v1456775261/no-image.png"
      var imageClass = 'form-no-image'
    } else {
      imageUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/w_100,h_100/" + this.state.path;
      imageClass = 'uploaded-form-image'
    }

    return (
      <div>
        <Navbar />
        <div className="form-container">
          <h3 className="create-adventure">Create an Adventure!</h3>
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
              <textarea
                rows='6'
                cols='50'
                className="form-control"
                valueLink={this.linkState('description')} />
            </fieldset>

            <fieldset className="form-group">
              <label>Latitude:</label>
              <input
                type="text"
                placeholder="Click Map to Set..."
                className="form-control"
                readOnly='true'
                valueLink={this.linkState('lat')} />
            </fieldset>

            <fieldset className="form-group">
              <label>Longitude:</label>
              <input
                type="text"
                placeholder="Click Map to Set..."
                readOnly='true'
                className="form-control"
                valueLink={this.linkState('lng')} />
            </fieldset>

            <div>
              <label>Type of Adventure:</label>
              {checkboxes}
            </div>

            <fieldset className="form-group">
              <br/>
              <button className="universal-button" onClick={this.uploadImage}>Add optional photo!</button>
            </fieldset>

            <img className={imageClass} src={imageUrl}></img>

            <br />
            <button className="btn btn-primary">Create an Adventure!</button>
            <br/>
          </form>
          <Map mapClassName="map-form" check={true}
               adventures={{}}/>
        </div>
      </div>
    );
  }
});

module.exports = AdventureForm;
