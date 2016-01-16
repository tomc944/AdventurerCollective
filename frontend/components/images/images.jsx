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
    image["adventure_id"] = this.id;
    apiUtil.postImage(image, this.id);
  },
  render: function() {
    return (
      <div>
        <ImageList images={this.state.images}
          adventures={this.props.adventures}/>
        <UploadButton postImage={this.postImage} />
      </div>
    );
  }
});

module.exports = Images;
