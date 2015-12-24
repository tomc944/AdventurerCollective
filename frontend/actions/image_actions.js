var AppDispatcher = require('../dispatcher/dispatcher');
var ImageConstants = require('../constants/image_constants');

var ImageActions = {
  receiveImage: function(image) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.RECEIVED_IMAGE,
      image: image
    });
  },
  receiveAllImages: function(images) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.RECEIVED_IMAGES,
      images: images
    });
  }
};



module.exports = ImageActions;
