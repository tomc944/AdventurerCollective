var React = require('react');
var Map = require('./map');
var Navbar = require("./navbar");
var FloatingBanner = require("./floating_banner")
var AdventureIndex = require('./adventures/adventure_index');
var AdventureStore = require('../stores/adventure');

var Search = React.createClass({
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
    var src = "http://res.cloudinary.com/dpdxfgx58/image/upload/v1454700577/logo_hs5wtl.png";
    return (
      <div>
        <img src={src} className='big-logo'></img>
        <div className="main-div">
          <Navbar />
          <FloatingBanner />
          <Map mapClassName='map'
            adventures={this.state.adventures}
            onIndex={true}/>
          <AdventureIndex
            adventures={this.state.adventures}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;
