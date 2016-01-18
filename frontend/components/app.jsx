var React = require('react');
var Resize = require('react-resize');

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
