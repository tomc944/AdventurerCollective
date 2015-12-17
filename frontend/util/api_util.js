var ApiActions = require("../actions/api_actions");

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
    })
  },
  createAdventure: function(adventure) {
    var adventure = adventure[0];
    $.ajax({
      method: 'POST',
      url: "api/adventures",
      data: {adventure: adventure},
      success: function(adventure) {
        ApiActions.receiveAdventure(adventure)
      }
    })
  }
}

module.exports = apiUtil;
