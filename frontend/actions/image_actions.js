var AppDispatcher = require('../dispatcher/dispatcher');
var ImageConstants = require('../constants/image_constants');

var ImageActions = {
  receiveImage: function(image) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.RECEIVED_IMAGE,
      image: image
    });
  }
};



module.exports = ImageActions;
