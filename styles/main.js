'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  navigator: {
    flex: 1,
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  paddedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigFont: {
    fontSize: 36,
  },
});

module.exports = styles;