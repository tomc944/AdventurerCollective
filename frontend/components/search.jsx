var React = require('react');
var Map = require('./map');
var Navbar = require("./navbar");
var LocalStorageMixin = require('react-localstorage');
var AdventureIndex = require('./adventures/adventure_index');
var AdventureStore = require('../stores/adventure');

var Search = React.createClass({
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return ({adventures: AdventureStore.all()});
  },
  _onChange: function() {
    this.setState({adventures: AdventureStore.all()});
  },
  componentDidMount: function() {
    this.adventureToken = AdventureStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.adventureToken.remove();
  },
  render: function() {
    return (
      <div className="main-div">
        <Navbar />
        <h3 className="adventure-title">Adventures Near You!</h3>
        <Map className="home-map"
          adventures={this.state.adventures}
          onIndex={true}/>
        <AdventureIndex
          adventures={this.state.adventures}/>
      </div>
    );
  }
});

module.exports = Search;
