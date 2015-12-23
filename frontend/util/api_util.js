var ApiActions = require('../actions/api_actions');
var ImageActions = require('../action/image_actions');

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
  grabImage: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/images/' + id,
      dataType: 'json',
      success: function(image) {
        ImageActions.receiveImage(image);
      }
    });
  }
};

module.exports = apiUtil;
