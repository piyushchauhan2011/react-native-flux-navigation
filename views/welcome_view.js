'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var SomethingView = require('./something_view');
var NavigationBar = require('react-native-navbar');
var { Icon, } = require('react-native-icons');

var {
  View,
  Text,
} = React;

var WelcomeView = React.createClass({
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
        <Text style={MainStyles.welcome} onPress={this.navigateToView}>
          Welcome to React Native!
        </Text>
        <Text style={MainStyles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Icon
          name='fontawesome|facebook-square'
          size={70}
          color='#3b5998'
          style={MainStyles.facebook}
        />
        <Text style={MainStyles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

module.exports = WelcomeView;