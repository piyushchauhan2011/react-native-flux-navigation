'use strict';

var constants = require('./constants');

var actions = {
  changeNavigation: function(value) {
    this.dispatch(constants.CHANGE_NAVIGATION, {key: value});
  },
};

module.exports = actions;