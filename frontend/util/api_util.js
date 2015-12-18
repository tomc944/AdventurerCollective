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
      success: function(id) {
        ApiActions.receiveAdventure(id);
      }
    });
  },
  createAdventure: function(adventure) {
    $.ajax({
      method: 'POST',
      url: 'api/adventures',
      data: {adventure: adventure[0]},
      success: function(adventure) {
        ApiActions.addAdventure(adventure);
      }
    });
  }
};

module.exports = apiUtil;
