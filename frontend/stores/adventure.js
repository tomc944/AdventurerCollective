var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants'),
    _adventures = [],
    AdventureStore = new Store(AppDispatcher);

AdventureStore.all = function() {
  return _adventures.slice();
}

AdventureStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AdventureConstants.ADVENTURES_RECEIVED:
      this._resetAdventures(payload.adventures);
      break;
    case AdventureConstants.ADVENTURE_RECEIVED:
      this._resetAdventure(payload.adventure);
      break;
  }
}

AdventureStore._resetAdventures = function(adventures) {
  _adventures = adventures;
  this.__emitChange();
}

AdventureStore._resetAdventure = function(adventure) {
  _adventures.concat(adventure);
  this.__emitChange();
}

module.exports = AdventureStore;
