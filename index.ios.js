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
} = React;

var { Icon, } = require('react-native-icons');

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

// Start of the Sidebar Menu Layout
var Menu = React.createClass({
  clearHeader: function() {
  },
  liked: function() {
    this.props.menuActions.close();
  },
  explore: function() {
    this.props.navigator.push({
      title: 'Another View',
      component: SomethingView,
      navigationBar: <NavigationBar title="Something View" />,
      passProps: {
        navigator: this.props.navigator
      }
    });
    // this.props.menuActions.close();
  },
  appointments: function() {
    this.props.menuActions.close();
  },
  settings: function() {
    this.props.menuActions.close();
  },
  feedback: function() {
    this.props.menuActions.close();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.loggedStyle}>
          <Icon
              name='fontawesome|user'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Logged In</Text>
        </View>
        <TouchableHighlight onPress={this.explore} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
          <Icon
            name='fontawesome|search'
            size={25}
            color='#042'
            style={styles.btnIcon}/>
          <Text>Explore</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.liked} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|heart'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Liked</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.appointments} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|clock-o'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Appointments</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.sideBarFooter}>
          <TouchableHighlight onPress={this.settings} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|cog'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Settings</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.feedback} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|comment'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Feedback</Text>
          </View>
          </TouchableHighlight>
        </View>
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
      <View style={MainStyles.container}>
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
          style={MainStyles.facebook}
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
      <View style={MainStyles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        style={MainStyles.navigator}
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
  container: {
    width: screenWidth*2/3,
    height: screenHeight,
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
    width: screenWidth*2/3,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});

AppRegistry.registerComponent('Docit', () => Docit);
