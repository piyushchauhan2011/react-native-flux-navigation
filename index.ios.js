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
} = React;

var { Icon, } = require('react-native-icons');

var SideMenu = require('react-native-side-menu');
var NavigationBar = require('react-native-navbar');

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

// Start of the Layout
var Menu = React.createClass({
  about: function() {
    this.props.menuActions.close();
    // this.props.navigator.push({...});
  },

  render: function() {
    return (
      <View>
        <Text>Menu</Text>
        <Text onPress={this.about}>About</Text>
      </View>
    );
  }
});

var OtherView = React.createClass({
  navigateBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.paddedView}>
        <Text style={styles.bigFont} onPress={this.navigateBack}>Other View</Text>
      </View>
    );
  }
});

var SomethingView = React.createClass({
  navigateToOther: function() {
    this.props.navigator.push({
      title: 'Other View',
      component: OtherView,
      passProps: {
        navigator: this.props.navigator
      }
    });
  },
  navigateBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.paddedView}>
        <Text
          style={styles.bigFont}
          onPress={this.navigateToOther}>This is another View.
        </Text>
        <Text
          style={styles.bigFont}
          onPress={this.navigateBack}>Navigate to Home
        </Text>
      </View>
    );
  }
});

var ContentView = React.createClass({
  navigateToView: function() {
    this.props.navigator.push({
      title: 'Another View',
      component: SomethingView,
      navigationBar: <NavigationBar title="Something View" />,
      passProps: {
        navigator: this.props.navigator
      }
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.navigateToView}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Icon
          name='fontawesome|facebook-square'
          size={70}
          color='#3b5998'
          style={styles.facebook}
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

// App Initialization with the Sidebar
var Docit = React.createClass({
  render: function() {
    var menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <NavigationBarView/>
      </SideMenu>
    );
  }
});

// Navigation with Content View
var NavigationBarView = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: ContentView,
          navigationBar: <NavigationBar title="Initial View"/>
        }}
        configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC33',
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
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  navigator: {
    flex: 1,
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

AppRegistry.registerComponent('Docit', () => Docit);
