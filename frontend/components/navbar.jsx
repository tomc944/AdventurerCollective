var React = require('react');
var SearchBar = require('./searchbar');

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
    var src = "http://res.cloudinary.com/dpdxfgx58/image/upload/v1454700577/logo_hs5wtl.png";
    return (
      <nav className="navbar navbar-default navbar-fixed-top" id="navbar-overwrite">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/"><img src={src} className="logo"></img></a>
              <a className="navbar-create" id="navbar-c" href="#adventures/new">Create Adventure!</a>

            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" id='dropdown-t' data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
                  <ul className="dropdown-menu" id='dropdown-m'>
                    <li><a href="#current_user">Starred Adventures</a></li>
                    <li><a className='logout' onClick={this.signOut}>Sign Out</a></li>
                  </ul>
                </li>
              </ul>
                <SearchBar />
            </div>
          </div>
        </nav>

    );
  }
});

module.exports = Navbar;
