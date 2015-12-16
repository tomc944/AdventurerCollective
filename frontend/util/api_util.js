var ApiActions = require("../actions/api_actions");

var apiUtil = {
  fetchAdventures: function(adventures) {
    $.ajax({
      method: 'GET',
      url: 'api/adventures',
      dataType: 'json',
      success: function(resp) {
        ApiActions.receiveAll(resp);
      }
    })
  }
}

module.exports = apiUtil;
