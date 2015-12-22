var React = require('react');
var AdventureStore = require('../../stores/adventure');
var Navbar = require('../navbar');
var Map = require('../map');
var apiUtil = require('../../util/api_util');

var AdventureDetail = React.createClass({
  getInitialState: function() {
    return ({adventure: AdventureStore.all()});
  },
  componentDidMount: function() {
    this.token = AdventureStore.addListener(this._onChange);
    apiUtil.fetchAdventure(parseInt(this.props.params.adventureId));
  },
  _onChange: function() {
    this.setState({adventure: AdventureStore.all()});
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  componentWillReceiveProps: function(newProps) {
    this.props = newProps;
    this.setState({adventure: this.AdventureStore.all()});
  },
  render: function() {
    if (typeof this.state.adventure === 'undefined') {
      return (<div></div>);
    } else {
      return (
        <div>
          <Navbar />
          <Map
            key={this.state.adventure.id}
            adventure={this.state.adventure}/>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.state.adventure.title}</h3>
            </div>
            <div className="panel-body">
              {this.state.adventure.description}
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = AdventureDetail;
