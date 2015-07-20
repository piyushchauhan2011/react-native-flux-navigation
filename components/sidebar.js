'use strict';

var React = require('react-native');
var MainStyles = require('../styles/main');
var SomethingView = require('../views/something_view');
var NavigationBar = require('react-native-navbar');

var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var { Icon, } = require('react-native-icons');
var Dimensions = require('Dimensions');

var { screenWidth, screenHeight } = Dimensions.get('window');

var {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  container: {
    width: screenWidth*2/3,
    height: screenHeight,
    backgroundColor: '#FAFAFA',
    paddingTop: 20,
    position: 'relative',
    flexDirection: 'column',
  },
  menus: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
  },
  loggedStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sideBarFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    width: screenWidth*2/3,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});

// Start of the Sidebar Menu Layout
var SideBar = React.createClass({
  mixins: [FluxMixin],
  clearHeader: function() {
  },
  liked: function() {
    this.props.menuActions.close();
  },
  explore: function() {
    // this.props.navigator.push({
    //   title: 'Another View',
    //   component: SomethingView,
    //   navigationBar: <NavigationBar title="Something View" />,
    //   passProps: {
    //     navigator: this.props.navigator
    //   }
    // });
    this.getFlux().actions.changeNavigation({ explore: 'explore-view' });
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
      <View style={styles.container}>
        <View style={styles.loggedStyle}>
          <Icon
              name='fontawesome|user'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Logged In</Text>
        </View>
        <TouchableHighlight onPress={this.explore} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
          <Icon
            name='fontawesome|search'
            size={25}
            color='#042'
            style={styles.btnIcon}/>
          <Text>Explore</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.liked} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|heart'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Liked</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.appointments} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|clock-o'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Appointments</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.sideBarFooter}>
          <TouchableHighlight onPress={this.settings} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|cog'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Settings</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.feedback} style={styles.menus} underlayColor='#DDD'>
          <View style={styles.loggedStyle}>
            <Icon
              name='fontawesome|comment'
              size={25}
              color='#042'
              style={styles.btnIcon}/>
          <Text>Feedback</Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

module.exports = SideBar;