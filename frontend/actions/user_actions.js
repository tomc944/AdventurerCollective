var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserActions = {
  receiveUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USER,
      user: user
    });
  }
};

module.exports = UserActions;
