var React = require('react'),
    apiUtil = require('../util/api_util'),
    AdventureStore = require('../stores/adventure');

var Map = React.createClass({
  getInitialState: function() {
    return({ adventures: AdventureStore.all() })
  },
  _onChange: function() {
    this.setState({ adventures: AdventureStore.all() })
    this._placeAdventures();
  },
  _placeAdventures: function() {
    var that = this;

    this.state.adventures.map(function(adventure) {
      adventure = new google.maps.Marker({
        position: { lat: adventure.lat, lng: adventure.lng },
        animation: google.maps.Animation.DROP
      })
      return(adventure.setMap(that.map))
    });

  },
  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 6
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.token = AdventureStore.addListener(this._onChange);
    this.listenForMove();
  },
  listenForMove: function() {
    var that = this;

    google.maps.event.addListener(this.map, 'idle', function() {
      debugger;
      var bounds = that.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      that.newBounds = {"northEast":
                       {"lat": northEast.lat(), "lng": northEast.lng()},
                        "southWest":
                       {"lat": southWest.lat(), "lng": southWest.lng()}}
      apiUtil.fetchAdventures(that.newBounds);
    });
  },
  componentWillUnmmount: function() {
    this.token.remove();
  },
  render: function() {
    return(
      <div className="map" ref="map"></div>
    )
  }
})

module.exports = Map;
