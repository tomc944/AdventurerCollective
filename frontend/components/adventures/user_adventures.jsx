var React = require('react');

var UserAdventures = React.createClass({
  render: function() {

    var adventureId = this.props.adventureId;
    var adventureeId = this.props.adventureeId;

    if (this.props.completed){
      var completed = "true"
    } else {
      completed = "false"
    }


    return (
      <div>
          <h3>New Join</h3>
            <li>{adventureeId}</li>
            <li>{adventureId}</li>
            <li>{completed}</li>
      </div>
    );
  }
})

module.exports = UserAdventures;
