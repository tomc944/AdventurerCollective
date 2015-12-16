var React = require('react'),
    AdventureStore = require('../stores/adventure'),
    apiUtil = require('../util/api_util.js');

var Index = React.createClass({
  getInitialState: function() {
    return ({ adventures: AdventureStore.all() });
  },
  _onChange: function() {
    this.setState({ adventures: AdventureStore.all() });
  },
  componentDidMount: function() {
    this.adventureToken = AdventureStore.addListener(this._onChange)
    apiUtil.fetchAdventures();
  },
  componentWillUnmmount: function() {
    this.adventureToken.remove();
  },
  render: function() {
    return (
      <div>
        {this.state.adventures.map(function(adventure, i) {
          return <li key={i}>{adventure.description}</li>
        })}
      </div>
    )
  }
})

module.exports = Index;
