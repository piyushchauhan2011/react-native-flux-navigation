'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  AlertIOS,
} = React;

var { Icon, } = require('react-native-icons');
var Fluxxor = require('fluxxor');
var NavigationBar = require('react-native-navbar');
var SomethingView = require('./something_view');
var flux = require('../flux');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var WelcomeView = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("NavigationStore")],
  getStateFromFlux: function() {
    var flux = this.getFlux();
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
    console.log('Handled the Navigation: ', flux.store('NavigationStore').getState());
    // console.log(this.props.navigator);
    var currentState = flux.store("NavigationStore").getState();
    if(currentState.data.key !== undefined && currentState.data.key.explore !== undefined) {
      this.props.navigator.push({
        title: 'Yet Another View',
        component: SomethingView,
        navigationBar: <NavigationBar title="Something View" />,
        passProps: {
          navigator: this.props.navigator
        }
      });
    } else if(currentState.data.key !== undefined && currentState.data.key.appointments !== undefined) {
      AlertIOS.alert('Foo Title', 'My Alert Message');
    }
    return flux.store("NavigationStore").getState();
  },
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
      <ScrollView>
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
      </ScrollView>
    );
  }
});

module.exports = WelcomeView;