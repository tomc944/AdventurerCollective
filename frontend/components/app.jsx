var React = require('react'),
    Index = require('./index');

var App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
        <Index />
      </div>
    );
  }
});

module.exports = App;
