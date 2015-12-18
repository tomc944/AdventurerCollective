var ApiActions = require('../actions/api_actions');

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
      success: function() {
        ApiActions.receiveAdventure(adventure);
      }
    });
  }
};

module.exports = apiUtil;
