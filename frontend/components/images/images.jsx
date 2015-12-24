var React = require('react'),
    ReactDOM = require('react-dom'),
    UploadButton = require('./UploadButton'),
    ImageList = require('./ImageList'),
    ImageStore = require('../../stores/image'),
    apiUtil = require('../../util/api_util');

var Images = React.createClass({
  getInitialState: function() {
    return { images: [] };
  },
  componentDidMount: function () {
    this.imageToken = ImageStore.addListener(this._onChange);
    this.id = parseInt(this.props.adventureId);
    apiUtil.grabImages(this.id);
  },
  _onChange: function() {
    this.setState({images: ImageStore.all()});
  },
  componentWillUnmount: function() {
    this.imageToken.remove();
  },
  postImage: function(image) {
    apiUtil.postImage(image, this.id);
  },
  render: function() {
    return (
      <div>
        <UploadButton postImage={this.postImage} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
});

module.exports = Images;
