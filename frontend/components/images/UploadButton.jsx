var React = require('react');

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: "dpdxfgx58", upload_preset: "lp8jhmdl"},
                                  function(error, results) {
      if (!error) {
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
