var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ImageConstants = require('../constants/image_constants'),
    _images = [],
    ImageStore = new Store(AppDispatcher);

ImageStore.all = function() {
  return _images.slice();
};

ImageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ImageConstants.RECEIVED_IMAGE:
      this._receiveImage(payload.image);
      break;
    case ImageConstants.RECEIVED_IMAGES:
      this._receiveAllImages(payload.images);
      break;
  }
};

ImageStore._receiveImage = function(image) {
  _images.push(image);
  this.__emitChange();
};

ImageStore._receiveAllImages = function(images){
  _images = images;
  this.__emitChange();
};

module.exports = ImageStore;
