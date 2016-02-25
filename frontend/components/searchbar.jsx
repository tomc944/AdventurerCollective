var React = require('react');
var AdventureStore = require('../stores/adventure');
var apiUtil = require('../util/api_util');
var History = require('react-router').History;

var SearchBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {inputVal: '', adventures: []};
  },
  _onChange: function() {
    this.setState({adventures: AdventureStore.unbounded()});
  },
  componentWillMount: function() {
    this.searhBarToken = AdventureStore.addListener(this._onChange);
    apiUtil.fetchAll();
  },
  componentWillUnmount: function() {
    this.searhBarToken.remove();
  },
  handleInput: function(e){
    this.setState({inputVal: e.currentTarget.value});
  },
  enterSearchbox: function() {
    this.setState({adventures: AdventureStore.unbounded()});
    this.inSearchbox = true;
  },
  leaveSearchbox: function() {
    this.setState({adventures: []});
    this.inSearchbox = false;
  },
  matches: function() {
    var matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    var that = this;
    var adventureKeys = Object.keys(this.state.adventures);

    adventureKeys.forEach(function(adventureKey) {
      var adventure = that.state.adventures[adventureKey];
      var sub = adventure.title.slice(0, that.state.inputVal.length);
      if (sub.toLowerCase() === that.state.inputVal.toLowerCase()) {
        matches.push(adventure);
      }
    });

    if (matches.length === 0) (
      matches.push('No matches')
    );

    return matches;
  },

  selectAdventure: function(adventure, e){
    e.preventDefault();

    var url = '/adventures/' + adventure.id;
    this.history.pushState({adventures: adventure}, url);
    this.setState({inputVal: ""});
  },
  render: function() {
    var adventures = '';
    if (this.inSearchbox) {
      adventures = this.matches();
      adventures = adventures.map(function(adventure, i){
        if (adventure === "No matches"){
          return <li className="list-group-item no-matches"
                     key={i}>No matches</li>;
        } else {
          return <a className="list-group-item searchbar-list"
                    key={i}
                    onMouseDown={this.selectAdventure.bind(null, adventure)}>
                    {adventure.title}</a>;
        }
      }.bind(this));
    }

    return (
      <form id="searchbar"
            className="navbar-form"
            onFocus={this.enterSearchbox}
            onBlur={this.leaveSearchbox}>
        <input type="text"
               className="form-control"
               onChange={this.handleInput}
               value={this.state.inputVal}
               placeholder="Find adventure..."/>
             <div className="searchbox">
          {adventures}
        </div>
      </form>
    );
  }
});

module.exports = SearchBar;
