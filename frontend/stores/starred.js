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
    case StarConstants.RECEIVED_STARRED:
      this._receivedAllStarred(payload.starred)
      break;
  }
};

StarredAdventureStore.find = function(id) {
  return _starred[id]
};

StarredAdventureStore._receivedAllStarred = function(starred) {
  _starred = {};
  starred.forEach(function (star) {
    _starred[star.adventure_id] = star;
  });
  this.__emitChange();
}

module.exports = StarredAdventureStore;
