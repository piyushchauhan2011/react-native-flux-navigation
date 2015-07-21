/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  TouchableHighlight,
  AlertIOS,
} = React;

var { Icon, } = require('react-native-icons');
var Fluxxor = require('fluxxor');

var flux = require('./flux');

var SideMenu = require('react-native-side-menu');
var NavigationBar = require('react-native-navbar');

var MainStyles = require('./styles/main');

var Dimensions = require('Dimensions');

var { screenWidth, screenHeight } = Dimensions.get('window');

// require the module
var KeyboardEvents = require('react-native-keyboardevents');

// Now get a handle on the event emitter and add your callbacks
// to the desired events.
var KeyboardEventEmitter = KeyboardEvents.Emitter;

// Each event will receive a `frames` object, which contains three keys -
// `begin`,  `end`, and `duration` . The `begin` and `end`  keys each
// contain an object describing the bounds of the keyboard (x, y, width
// and height). The `duration` key contains the length of the keyboard
// animation in seconds.

// The frame in `begin` describes the bounds of the keyboard before the
// animation occurred and the frame in `end` describes the bounds the keyboard
// will have, after the animation has completed.
KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillShowEvent, (frames) => {
  console.log('will show', frames);
});

KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, (frames) => {
  console.log('did show', frames);
});

KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, (frames) => {
  console.log('will hide', frames);
});

KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidHideEvent, (frames) => {
  console.log('did hide', frames);
});

KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillChangeFrameEvent, (frames) => {
  console.log('will change', frames);
});

KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidChangeFrameEvent, (frames) => {
  console.log('did change', frames);
});

var WelcomeView = require('./views/welcome_view');
var SideBar = require('./components/sidebar');
var NavigationBarView = require('./views/navigation_bar_view');

// Navigation with Content View
var Docit = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    var menu = <SideBar flux={flux} navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
      <View style={MainStyles.navigator}>
        {navBar}
        <View style={MainStyles.container}>
        <Component navigator={navigator} route={route} flux={flux} />
        </View>
      </View>
      </SideMenu>
    );
  },

  render: function() {
    return (
      <Navigator
        style={MainStyles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: NavigationBarView,
          navigationBar: <NavigationBar title="Initial View"/>
        }}
        configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
        }}
      />
    );
  }
});

AppRegistry.registerComponent('Docit', () => Docit);
