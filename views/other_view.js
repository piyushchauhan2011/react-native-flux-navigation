'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');

var {
  View,
  Text,
} = React;

var OtherView = React.createClass({
  navigateBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={MainStyles.paddedView}>
        <Text style={MainStyles.bigFont} onPress={this.navigateBack}>Other View</Text>
      </View>
    );
  }
});

module.exports = OtherView;