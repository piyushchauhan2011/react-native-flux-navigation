'use strict';

var Fluxxor = require('fluxxor');
var constants = require('../constants');

var NavigationStore = Fluxxor.createStore({
  initialize: function() {
    this.data = {};

    this.bindActions(
      constants.CHANGE_NAVIGATION, this.onChangeNavigation,
    );
  },

  onChangeNavigation: function(payload) {
    console.log('on change navigation: ', payload);
    this.data = payload;
    this.emit("change");
  },

  getState: function() {
    return {
      data: this.data,
    };
  },
});

module.exports = NavigationStore;