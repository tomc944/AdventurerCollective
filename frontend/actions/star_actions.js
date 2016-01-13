var AppDispatcher = require('../dispatcher/dispatcher');
var StarConstants = require('../constants/star_constants');

var StarActions = {
  receivedStarred: function(starred) {
    AppDispatcher.dispatch({
      actionType: StarConstants.RECEIVED_STARRED,
      starred: starred
    });
  }
};

module.exports = StarActions;
