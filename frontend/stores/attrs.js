var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FormConstants = require('../constants/form_constants'),
    _attrs = {},
    AttrStore = new Store(AppDispatcher);

AttrStore.all = function() {
  return $.extend({}, _attrs);
};

AttrStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FormConstants.RECEIVED_ATTRS:
      this._receiveAttrs(payload.attrs);
      break;
  }
};

AttrStore._receiveAttrs = function(attrs) {
  _attrs = attrs;
  this.__emitChange();
};

module.exports = AttrStore;
