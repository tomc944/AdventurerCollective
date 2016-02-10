var React = require('react');
var apiUtil = require('../util/api_util');
var FormActions = require('../actions/form_actions');
var AdventureStore = require('../stores/adventure');
var ReactDOM = require('react-dom');

var Map = React.createClass({
  componentDidUpdate: function() {
    this._placeAdventures();
  },
  _placeAdventures: function() {
    var that = this;
    var adventureKeys = Object.keys(this.props.adventures);

    adventureKeys.map(function(adventureId) {
      var adventure = that.props.adventures[parseInt(adventureId)];

      if (adventure.completed === true || adventure.completed === undefined) {
        that._placeCompletedAdventure(adventure);
      } else {
        that._placeTodoAdventure(adventure);
      }

      that.attachDescription(newadventure);
      return (newadventure.setMap(that.map));
    });

  },
  _placeCompletedAdventure: function(adventure) {
    newadventure = new google.maps.Marker({
      position: {lat: adventure.lat, lng: adventure.lng},
      description: adventure.title,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: "green",
        scale: 5
      },
    });
  },
  _placeTodoAdventure: function(adventure) {
    newadventure = new google.maps.Marker({
      position: {lat: adventure.lat, lng: adventure.lng},
      description: adventure.title,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: "red",
        scale: 5
      },
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
      zoom: 5
    };

    this.map = new google.maps.Map(map, mapOptions);

    if (this.props.adventures) {this._placeAdventures();}
    if (this.props.onIndex){this.listenForMove();}
    if (this.props.check){this.listenForClick();}

  },
  clearMarkers: function() {
    if (this.tempMarker) {
      this.tempMarker.setMap(null)
    }
  },
  addTempMarker: function(location) {
    this.tempMarker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        strokeColor: "green",
        scale: 5
      }
    });
  },
  listenForClick: function() {

    var that = this;

    this.map.addListener('click', function(e) {
      that.clearMarkers();
      that.addTempMarker(e.latLng)
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
  render: function() {
    if (!this.adventureClass) {
      this.adventureClass = "map"
    }

    return (
      <div className={this.props.mapClassName} ref="map"></div>
    );
  }
});

module.exports = Map;
