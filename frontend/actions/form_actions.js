var AppDispatcher = require('../dispatcher/dispatcher');
var FormConstants = require('../constants/form_constants');

var FormActions = {
  receiveAttrs: function(attrs) {
    AppDispatcher.dispatch({
      actionType: FormConstants.RECEIVED_ATTRS,
      attrs: attrs
    });
  }
};

module.exports = FormActions;
