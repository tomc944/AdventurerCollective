var React = require('react');

var Navbar = React.createClass({
  signOut: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/session',
      success: function() {
        window.location = '/';
      }
    });
  },

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Adventurer Collective</a>
              <a className="navbar-brand" href="#adventures/new">Create Adventure!</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">

              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="navbar-brand" onClick={this.signOut}>Sign Out</a>
                </li>
              </ul>
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..." />
              </form>
            </div>
          </div>
        </nav>

    );
  }
});

module.exports = Navbar;
