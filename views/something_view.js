'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var OtherView = require('./other_view');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var {
  View,
  Text,
} = React;

var SomethingView = React.createClass({
  mixins: [FluxMixin],
  navigateToOther: function() {
    // this.props.navigator.push({
    //   title: 'Other View',
    //   component: OtherView,
    //   passProps: {
    //     navigator: this.props.navigator
    //   }
    // });
    this.getFlux().actions.changeNavigation({ other: 'other-view' });
  },
  navigateBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={MainStyles.paddedView}>
        <Text
          style={MainStyles.bigFont}
          onPress={this.navigateToOther}>This is another View.
        </Text>
        <Text
          style={MainStyles.bigFont}
          onPress={this.navigateBack}>Navigate to Home
        </Text>
      </View>
    );
  }
});

module.exports = SomethingView;