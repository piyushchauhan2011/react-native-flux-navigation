'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var OtherView = React.createClass({
  mixins: [FluxMixin],
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