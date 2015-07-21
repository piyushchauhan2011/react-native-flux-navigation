'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

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
  scontainer: {
    width: SCREEN_WIDTH*2/3,
    height: SCREEN_HEIGHT,
    backgroundColor: '#FAFAFA',
    paddingTop: 20,
    position: 'relative',
    flexDirection: 'column',
  },
  menus: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
  },
  loggedStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sideBarFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    width: SCREEN_WIDTH*2/3,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});

module.exports = styles;