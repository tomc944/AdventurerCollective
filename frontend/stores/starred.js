var Store = require('flux/utils').Store,
    StarConstants = require('../constants/star_constants'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    _starred = [],
    StarredAdventureStore = new Store(AppDispatcher);

StarredAdventureStore.all = function() {
  return _starred.slice();
};

StarredAdventureStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case StarConstants.RECEIVED_STARRED:
      this._receivedStarred(payload.starred)
      break;
  }
};

StarredAdventureStore._receivedStarred = function(starred) {
  _starred = starred;
  this.__emitChange();
}

module.exports = StarredAdventureStore;
