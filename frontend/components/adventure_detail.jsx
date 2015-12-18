var React = require('react');
var AdventureStore = require('../stores/adventure');

var AdventureDetail = React.createClass({
  getInitialState: function() {
    return ({adventure: this.getStateFromStore()});
  },
  getStateFromStore: function() {
    return AdventureStore.find(parseInt(this.props.params.adventureId, 10));
  },
  componentDidMount: function() {
    this.token = AdventureStore.addListener(this._onChage);
  },
  _onChange: function() {
    this.setState({adventure: this.getStateFromStore()});
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  render: function() {
    debugger
    if (this.state.adventure.id === 'undefined') {
      return (<div></div>);
    } else {
      return (
        <div>
          {this.state.adventure.title}
        </div>
      );
    }
  }
});

module.exports = AdventureDetail;
