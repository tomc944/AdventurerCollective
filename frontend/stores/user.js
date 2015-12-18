var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants'),
    _users = {},
    UserStore = new Store(AppDispatcher);

UserStore.all = function() {
  return $.extend({}, _users);
};

UserStore.__onDispatch = function (payload) {
  debugger
  switch(payload.actionType) {
    case UserConstants.RECEIVED_USER:
      this._receiveUser(payload.user);
      break;
  }
};

UserStore._receiveUser = function(user) {
  debugger;
  _users = user;
  this.__emitChange();
};

module.exports = UserStore;
