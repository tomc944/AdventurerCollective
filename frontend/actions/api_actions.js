var AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants');

var ApiActions = {
  receiveAll: function(adventures) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURES_RECEIVED,
      adventures: adventures
    });
  },
  receiveAdventure: function(adventure) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURE_RECEIVED,
      adventure: adventure
    })
  }
}

module.exports = ApiActions;
