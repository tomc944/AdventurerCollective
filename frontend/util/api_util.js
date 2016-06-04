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
  createAdventure: function(adventure, callback) {
    $.ajax({
      method: 'POST',
      url: 'api/adventures',
      data: {adventure: adventure},
      success: function(newAdventure) {
        var packagedAdventure = newAdventure['adventure']
        packagedAdventure['images'] = newAdventure['images']
        packagedAdventure['activities'] = newAdventure['activities']
        ApiActions.receiveAdventure(packagedAdventure);
        debugger
        callback(packagedAdventure);
      },
      error: function(message) {
        alert("All required fields must be complete!")
      }
    });
  },
  grabImages: function(adventureId) {
    $.ajax({
      method: 'GET',
      url: 'api/adventures/' + adventureId + '/images',
      data: {params: adventureId},
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
      data: {image: image},
      success: function(newImage) {
        ImageActions.receiveImage(newImage);
      }
    });
  }
};

module.exports = apiUtil;
