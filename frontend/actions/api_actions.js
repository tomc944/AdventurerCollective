var AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants');

var ApiActions = {
  receiveAll: function(adventures) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURES_RECEIVED,
      adventures: adventures
    });
  }
}

module.exports = ApiActions;
