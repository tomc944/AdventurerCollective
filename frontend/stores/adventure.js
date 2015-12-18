var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants'),
    _adventures = {},
    AdventureStore = new Store(AppDispatcher);

AdventureStore.all = function() {
  return $.extend({}, _adventures);
};

AdventureStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case AdventureConstants.ADVENTURES_RECEIVED:
      this._resetAdventures(payload.adventures);
      break;
    case AdventureConstants.ADVENTURE_ADDED:
      this._addAdventure(payload.adventure);
      break;
    case AdventureConstants.ADVENTURE_RECEIVED:
      this._receiveAdventure(payload.id);
      break;
  }
};

AdventureStore.find = function(id) {
  return _adventures[id];
};

AdventureStore._resetAdventures = function(adventures) {
  _adventures = {};
  adventures.forEach(function (adventure) {
    _adventures[adventure.id] = adventure;
  });
  this.__emitChange();
};

AdventureStore._addAdventure = function(adventure) {
  _adventures[adventure.id] = adventure;
  this.__emitChange();
};

AdventureStore._receiveAdventure = function(adventure) {
  _adventures = adventure;

  this.__emitChange();
};

module.exports = AdventureStore;
