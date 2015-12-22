var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AdventureConstants = require('../constants/adventure_constants'),
    _adventures = {},
    _adventureAll = {},
    _blankAttrs = {"lat": '', "lng": ''},
    AdventureStore = new Store(AppDispatcher);

AdventureStore.all = function() {
  return $.extend({}, _adventures);
};

AdventureStore.unbounded = function () {
  return $.extend({}, _adventureAll);
};

AdventureStore.takeAttrs = function() {
  return $.extend({}, _blankAttrs);
};

AdventureStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case AdventureConstants.ADVENTURES_RECEIVED:
      this._resetAdventures(payload.adventures);
      break;
    case AdventureConstants.ADVENTURE_RECEIVED:
      this._receiveAdventure(payload.adventure);
      break;
    case AdventureConstants.UNBOUNDED_RECEIEVD:
      this._receiveUnbounded(payload.adventures);
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

AdventureStore._receiveAdventure = function(adventure) {
  _adventures[adventure.id] = adventure;
    this.__emitChange();
};

AdventureStore._setAttrs = function(attrs) {
  _blankAttrs["lat"] = attrs["lat"];
  _blankAttrs["lng"] = attrs["lng"];
};

AdventureStore._receiveUnbounded = function(adventures) {
  _adventureAll = {};
  adventures.forEach(function(adventure) {
    _adventureAll[adventure.id] = adventure;
  });
  this.__emitChange();
};

module.exports = AdventureStore;
