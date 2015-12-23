var React = require('react'),
    ReactDOM = require('react-dom'),
    UploadButton = require('./UploadButton'),
    ImageList = require('./ImageList');

var Images = React.createClass({
  getInitialState: function() {
    return { images: [] };
  },
  componentDidMount: function () {
    this.setState({images: ImageStore.all()})
  }
});

module.exports = Images;
