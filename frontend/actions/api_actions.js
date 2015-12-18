var AppDispatcher = require('../dispatcher/dispatcher');
var AdventureConstants = require('../constants/adventure_constants');

var ApiActions = {
  receiveAll: function(adventures) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURES_RECEIVED,
      adventures: adventures
    });
  },
  addAdventure: function(adventure) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURE_ADDED,
      adventure: adventure
    });
  },
  receiveAdventure: function(id) {
    AppDispatcher.dispatch({
      actionType: AdventureConstants.ADVENTURE_RECEIVED,
      id: id
    });
  }
};

module.exports = ApiActions;
