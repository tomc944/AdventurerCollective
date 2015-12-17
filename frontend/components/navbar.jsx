var React = require('react');

var Navbar = React.createClass({
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
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">

              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <form className="button_to" method="post" action="http://localhost:3000/session">
                    <input type="hidden" name="_method" value="delete" />
                    <input type="submit" value="Sign Out" />
                    <input type="hidden" name="authenticity_token" value={$('meta[name="csrf-token"]').attr('content')} />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    )
  }
})

module.exports = Navbar;
