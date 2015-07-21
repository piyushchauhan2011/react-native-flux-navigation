'use strict';

var NavigationStore = require('./stores/navigation_store');

var stores = {
  NavigationStore: new NavigationStore()
};

module.exports = stores;