var Store = require('flux/utils').Store,
    AppDispatcher = require('../disatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants'),
    _params = {},
    FilterStore = new Store(AppDispatcher);
