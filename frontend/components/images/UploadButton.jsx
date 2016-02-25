var React = require('react');
var UserStore = require('../../stores/user');
var userUtil = require('../../util/user_api_util');

var UploadButton = React.createClass({
  getInitialState: function() {
    return ({user: UserStore.all()});
  },
  _onChange: function() {
    this.setState({user: UserStore.all()});
  },
  componentDidMount: function() {
    this.userToken = UserStore.addListener(this._onChange);
    userUtil.fetchUser();
  },
  componentWillUnmount: function() {
    this.userToken.remove();
  },
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: "dpdxfgx58", upload_preset: "lp8jhmdl"},
                                  function(error, results) {
      if (!error) {
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  checkUserCredentials: function() {
    var adventure = this.props.adventures;
    var adventureKey = Object.keys(adventure)[0];

    if (adventure[adventureKey].author_id === this.state.user.id) {
      return (<button className="universal-button" onClick={this.upload}>Upload new image!</button>);
    } else {
      return (<div></div>)
    }
  },
  render: function() {
    return (
      <div className="upload-form">
        {this.checkUserCredentials()}
      </div>
    )
  }
});

module.exports = UploadButton;
