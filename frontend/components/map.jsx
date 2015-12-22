var React = require('react');
var apiUtil = require('../util/api_util');
var FormActions = require('../actions/form_actions');
var AdventureStore = require('../stores/adventure');
var ReactDOM = require('react-dom');

var Map = React.createClass({
  getInitialState: function() {
    return ({adventures: AdventureStore.all()});
  },
  _onChange: function() {
    this.setState({adventures: AdventureStore.all()});
    this._placeAdventures();
  },
  _placeAdventures: function() {
    var that = this;
    var adventureKeys = Object.keys(this.state.adventures);
    if (this.props.adventure) {adventureKeys = [this.props.adventure.id];}

    adventureKeys.map(function(adventureId) {
      var adventure = that.state.adventures[parseInt(adventureId)];
      adventure = new google.maps.Marker({
        position: {lat: adventure.lat, lng: adventure.lng},
        description: adventure.title
      });
      that.attachDescription(adventure);
      return (adventure.setMap(that.map));
    });
  },
  attachDescription: function(adventure) {
    var infowindow = new google.maps.InfoWindow({
      content: adventure.description
    });

    adventure.addListener('click', function() {
      infowindow.open(adventure.get('map'), adventure);
    });
  },
  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 6
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.token = AdventureStore.addListener(this._onChange);

    if (!this.props.adventure){this.listenForMove();}
    if (this.props.check){this.listenForClick();}

  },
  listenForClick: function() {

    this.map.addListener('click', function(e) {

      this.attrs ={
        "lat": e.latLng.lat(),
        "lng": e.latLng.lng()
      };
      FormActions.receiveAttrs(this.attrs);
    });
  },
  listenForMove: function() {
    var that = this;

    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      that.newBounds = {"northEast":
                       {"lat": northEast.lat(), "lng": northEast.lng()},
                        "southWest":
                       {"lat": southWest.lat(), "lng": southWest.lng()}};
      apiUtil.fetchAdventures(that.newBounds);
    });
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
