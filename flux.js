'use strict';

var Fluxxor = require('fluxxor');

var constants = require('./constants');
var actions = require('./actions');
var stores = require('./stores');

var flux = flux || new Fluxxor.Flux(stores, actions);
flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

module.exports = flux;