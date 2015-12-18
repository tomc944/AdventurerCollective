var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants'),
    _adventures = [],
    AdventureStore = new Store(AppDispatcher);

AdventureStore.all = function() {
  debugger;
  return _adventures.slice();
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
    default:
      break;
  }
};

AdventureStore.find = function(id) {
  debugger;
  return _adventures[id];
};

AdventureStore._resetAdventures = function(adventures) {
  _adventures = adventures;
  this.__emitChange();
};

AdventureStore._addAdventure = function(adventure) {
  _adventures.concat(adventure);
  this.__emitChange();
};

AdventureStore._receiveAdventure = function(id) {
  var index = _adventures.indexOf(id);

  if (index === -1) {
    _adventures.splice(index, 1);
  }

  this.__emitChange();
};

module.exports = AdventureStore;
