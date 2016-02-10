var Store = require('flux/utils').Store,
    StarConstants = require('../constants/star_constants'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    _starred = {},
    StarredAdventureStore = new Store(AppDispatcher);

StarredAdventureStore.all = function() {
  return $.extend({}, _starred);
};

StarredAdventureStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case StarConstants.RECEIVED_ALL_STARRED:
      this._receivedAllStarred(payload.starred)
      break;
    case StarConstants.RECEIVED_STARRED:
      this._receiveStarred(payload.starred)
      break;
    case StarConstants.DELETE_STARRED:
      this._deleteStarred(payload.starred)
      break;
    case StarConstants.EDIT_STARRED:
      this._editStarred(payload.starred)
      break
    }
  };

StarredAdventureStore.find = function(id) {
  return _starred[id] ? true : false
};

StarredAdventureStore._editStarred = function(starred) {
  _starred[starred.adventure_id] = starred;
  this.__emitChange();
}

StarredAdventureStore._deleteStarred = function(starred) {
  delete _starred[starred.adventure_id];
  this.__emitChange();
};

StarredAdventureStore._receiveStarred = function(starred) {
  _starred[starred.adventure_id] = starred;
  this.__emitChange();
}

StarredAdventureStore._receivedAllStarred = function(starred) {
  _starred = {};

  starred.forEach(function (star) {
    _starred[star.adventure_id] = star;
  });
  this.__emitChange();
}

module.exports = StarredAdventureStore;
