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
    var src = "assets/logo.png"
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
              <a href="/"><img src={src} className="logo"></img></a>
              <a className="navbar-brand" href="#adventures/new">Create Adventure!</a>

            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#current_user">User Profile</a></li>
                    <li><a onClick={this.signOut}>Sign Out</a></li>
                  </ul>
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
