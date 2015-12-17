var React = require('react');

var AdventureIndexItem = React.createClass({
  // handleChange: function(e) {
  //   e.preventDefault();
  //   redirect_to "#/adventures/" + this.props.id
  // },
  render: function() {
    return(
      <div>
        <li onClick={this.handleChange}>{this.props.description}</li>
      </div>
    )
  }
})

module.exports =  AdventureIndexItem;
