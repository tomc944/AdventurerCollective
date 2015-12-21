var AppDispatcher = require('../dispatcher/dispatcher');
var AdventureConstants = require('../constants/adventure_constants');

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
    });
  },
  receiveUnbounded: function(adventures) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.UNBOUNDED_RECEIEVD,
      adventures: adventures
    });
  }
};

module.exports = ApiActions;
