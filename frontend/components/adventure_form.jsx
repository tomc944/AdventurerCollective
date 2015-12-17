var React = require('react'),
    History = require('react-router').History,
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AdventureForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    description: '',
    author_id: '',
    lat: '',
    lng: '',
  },

  getInitialState: function() {
    return this.blankAttrs
  },

  createAdventure: function(event) {
    event.preventDefault();
    var adventure = [{}];
    Object.keys(this.state).forEach(function(key) {
      adventure[0][key] = this.state[key]
    }.bind(this))
    ApiUtil.createAdventure(adventure, function(id) {
      this.history.pushState(null, "/adventure/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs)
  },

  render: function() {
    return (
      <form onSubmit={this.createAdventure}>
        <fieldset className="form-group">
          <label>Title:</label>
          <input
            type='text'
            className="form-control"
            valueLink={this.linkState('title')} />
        </fieldset>

        <div>
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            valueLink={this.linkState('description')} />
        </div>

        <div>
          <label>Lat:</label>
          <input
            type='text'
            className="form-control"
            valueLink={this.linkState('lat')} />
        </div>

        <div>
          <label>Lng:</label>
          <input
            type='text'
            className="form-control"
            valueLink={this.linkState('lng')} />
        </div>
        <br />
        <button className="btn btn-primary">Create an Adventure!</button>
        <br/>
      </form>
    )
  }
})

module.exports = AdventureForm;
