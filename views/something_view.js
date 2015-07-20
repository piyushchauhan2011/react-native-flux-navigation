'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var OtherView = require('./other_view');

var {
  View,
  Text,
} = React;

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