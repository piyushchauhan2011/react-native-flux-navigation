'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var SomethingView = require('../views/something_view');
var NavigationBar = require('react-native-navbar');
var { Icon, } = require('react-native-icons');
var Dimensions = require('Dimensions');

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

var Fluxxor = require('fluxxor');

var flux = require('../flux');
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
} = React;

// Start of the Sidebar Menu Layout
var SideBar = React.createClass({
  mixins: [FluxMixin],
  getInitialState: function() {
    console.log(SCREEN_WIDTH);
    console.log(SCREEN_HEIGHT);
    return {
    };
  },
  clearHeader: function() {
  },
  liked: function() {
    this.props.menuActions.close();
  },
  explore: function() {
    this.props.navigator.push({
      title: 'Another View',
      component: SomethingView,
      navigationBar: <NavigationBar title="Something SideMenu View" />,
      passProps: {
        navigator: this.props.navigator
      }
    });
    // this.getFlux().actions.changeNavigation({ explore: 'explore-view' });
    this.props.menuActions.close();
  },
  appointments: function() {
    this.getFlux().actions.changeNavigation({ appointments: 'appointments-view' });
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
      <View style={MainStyles.scontainer}>
        <View style={MainStyles.loggedStyle}>
          <Icon
              name='fontawesome|user'
              size={25}
              color='#042'
              style={MainStyles.btnIcon}/>
          <Text>Logged In</Text>
        </View>
        <TouchableHighlight onPress={this.explore} style={MainStyles.menus} underlayColor='#DDD'>
          <View style={MainStyles.loggedStyle}>
          <Icon
            name='fontawesome|search'
            size={25}
            color='#042'
            style={MainStyles.btnIcon}/>
          <Text>Explore</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.liked} style={MainStyles.menus} underlayColor='#DDD'>
          <View style={MainStyles.loggedStyle}>
            <Icon
              name='fontawesome|heart'
              size={25}
              color='#042'
              style={MainStyles.btnIcon}/>
          <Text>Liked</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.appointments} style={MainStyles.menus} underlayColor='#DDD'>
          <View style={MainStyles.loggedStyle}>
            <Icon
              name='fontawesome|clock-o'
              size={25}
              color='#042'
              style={MainStyles.btnIcon}/>
          <Text>Appointments</Text>
          </View>
        </TouchableHighlight>

        <View style={MainStyles.sideBarFooter}>
          <TouchableHighlight onPress={this.settings} style={MainStyles.menus} underlayColor='#DDD'>
          <View style={MainStyles.loggedStyle}>
            <Icon
              name='fontawesome|cog'
              size={25}
              color='#042'
              style={MainStyles.btnIcon}/>
          <Text>Settings</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.feedback} style={MainStyles.menus} underlayColor='#DDD'>
          <View style={MainStyles.loggedStyle}>
            <Icon
              name='fontawesome|comment'
              size={25}
              color='#042'
              style={MainStyles.btnIcon}/>
          <Text>Feedback</Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

module.exports = SideBar;