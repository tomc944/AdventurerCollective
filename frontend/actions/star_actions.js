var AppDispatcher = require('../dispatcher/dispatcher');
var StarConstants = require('../constants/star_constants');

var StarActions = {
  receivedAllStarred: function(starred) {
    AppDispatcher.dispatch({
      actionType: StarConstants.RECEIVED_ALL_STARRED,
      starred: starred
    });
  },
  receivedStarred: function(starred) {
    AppDispatcher.dispatch({
      actionType: StarConstants.RECEIVED_STARRED,
      starred: starred
    })
  },
  deleteStarred: function(starred) {
    AppDispatcher.dispatch({
      actionType: StarConstants.DELETE_STARRED,
      starred: starred
    })
  },
  editStarred: function(starred) {
    AppDispatcher.dispatch({
      actionType: StarConstants.EDIT_STARRED,
      starred: starred
    })
  }
};

module.exports = StarActions;
