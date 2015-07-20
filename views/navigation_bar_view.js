'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var Navigation = require('../components/navigation');
var NavigationBar = require('react-native-navbar');

var flux = require('../flux');

var {
  Navigator,
  View,
} = React;

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
        <Component navigator={navigator} route={route} flux={flux} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        style={MainStyles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: Navigation,
          navigationBar: <NavigationBar title="Initial View"/>
        }}
        configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
        }}
      />
    );
  }
});

module.exports = NavigationBarView;