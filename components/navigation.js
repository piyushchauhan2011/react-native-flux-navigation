'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var WelcomeView = require('../views/welcome_view');
var SomethingView = require('../views/something_view');
var OtherView = require('../views/other_view');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var {
  View,
  AlertIOS,
} = React;

var Navigation = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("NavigationStore")],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    console.log('Handled the Navigation: ', flux.store('NavigationStore').getState());
    // console.log(this.props.navigator);
    var currentState = flux.store("NavigationStore").getState();
    if(currentState.data.key !== undefined && currentState.data.key.explore !== undefined) {
      this.props.navigator.push({
        id: 'YETANOTHERVIEW',
        title: 'Yet Another View',
        component: SomethingView,
        navigationBar: <NavigationBar title="Something View" />,
        passProps: {
          navigator: this.props.navigator
        }
      });
    } else if(currentState.data.key !== undefined && currentState.data.key.other !== undefined) {
      this.props.navigator.push({
        id: 'OTHERVIEW',
        title: 'Other View',
        component: OtherView,
        navigationBar: <NavigationBar title="Other View" />,
        passProps: {
          navigator: this.props.navigator
        }
      });
    } else if(currentState.data.key !== undefined && currentState.data.key.appointments !== undefined) {
      AlertIOS.alert('Foo Title', 'My Alert Message');
    }
    return flux.store("NavigationStore").getState();
  },
  render: function() {
    return (
        <WelcomeView navigator={this.props.navigator} />
    );
  }
});

module.exports = Navigation;