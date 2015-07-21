'use strict';

var React = require('react-native');
var {
  View,
} = React;

var WelcomeView = require('./welcome_view');
var flux = require('../flux');

// App Initialization with the Sidebar
var NavigationBarView = React.createClass({
  render: function() {
    return (
      <WelcomeView flux={flux} navigator={this.props.navigator}/>
    );
  }
});

module.exports = NavigationBarView;