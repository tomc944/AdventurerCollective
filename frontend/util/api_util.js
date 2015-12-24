var ApiActions = require('../actions/api_actions');
var ImageActions = require('../actions/image_actions');

var apiUtil = {
  fetchAdventures: function(bounds) {
    $.ajax({
      method: 'GET',
      url: 'api/adventures',
      data: {params: bounds},
      dataType: 'json',
      success: function(resp) {
        ApiActions.receiveAll(resp);
      }
    });
  },
  fetchAll: function() {
    $.ajax({
      method: 'GET',
      url: 'api/adventures',
      dataType: 'json',
      success: function(allAdventures) {
        ApiActions.receiveUnbounded(allAdventures);
      }
    });
  },
  fetchAdventure: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/adventures/' + id,
      dataType: 'json',
      success: function(adventure) {
        ApiActions.receiveAdventure(adventure);
      }
    });
  },
  createAdventure: function(adventure) {
    $.ajax({
      method: 'POST',
      url: 'api/adventures',
      data: {adventure: adventure},
      success: function(newAdventure) {
        ApiActions.receiveAdventure(newAdventure);
      }
    });
  },
  grabImages: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/adventures/' + id + '/images',
      dataType: 'json',
      success: function(images) {
        ImageActions.receiveAllImages(images);
      }
    });
  },
  postImage: function(image, id) {
    $.ajax({
      method: "POST",
      url: 'api/adventures/' + id + '/images',
      data: {image: {url: image.url}},
      success: function(newImage) {
        ImageActions.receiveImage(newImage);
      }
    });
  }
};

module.exports = apiUtil;
