var React = require('react');
var AdventureStore = require('../stores/adventure');
var Navbar = require('./navbar');
var Map = require('./map');

var AdventureDetail = React.createClass({
  getInitialState: function() {
    return ({adventure: this.getStateFromStore()});
  },
  getStateFromStore: function() {
    return AdventureStore.find(parseInt(this.props.params.adventureId, 10));
  },
  componentDidMount: function() {
    this.token = AdventureStore.addListener(this._onChange);
  },
  _onChange: function() {
    this.setState({adventure: this.getStateFromStore()});
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  render: function() {
    if (typeof this.state.adventure === 'undefined') {
      return (<div></div>);
    } else {
      return (
        <div>
          <Navbar />
          {this.state.adventure.title}
          <Map />
        </div>
      );
    }
  }
});

module.exports = AdventureDetail;
