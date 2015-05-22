'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator,
} = React;

var UserActions = require('../Actions/UserActions');
var UserStore = require('../Stores/UserStore');
var Video = require('react-native-video');
var Modal = require('react-native-modal');
var LinearGradient = require('react-native-linear-gradient');
var UserActions = require('../Actions/UserActions');
var styles = require('./Styles');
var UserStoreSync = require('../Mixins/UserStoreSync');
var DeviceHeight = require('Dimensions').get('window').height;

var GoDoHomeScreen = React.createClass({
  mixins: [UserStoreSync, Modal.Mixin],

  timeHome() {
    this.props.navigator.replace({id: 'time-home'});
  },
  moneyHome() {
    this.props.navigator.replace({id: 'money-home'});
  },

  // afterUpdateUserFromStore() {
  //   var user = UserStore.getState();
  //
  //   if (user.get('email')) {
  //     this.props.navigator.replace({id: 'user-info'});
  //   }
  // },

  showModalTransition(transition) {
    transition('opacity', {duration: 200, begin: 0, end: 1});
    transition('height', {duration: 200, begin: DeviceHeight * 2, end: DeviceHeight});
  },

  hideModalTransition(transition) {
    transition('height', {duration: 200, begin: DeviceHeight, end: DeviceHeight * 2, reset: true});
    transition('opacity', {duration: 200, begin: 1, end: 0});
  },

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={this.timeHome}>
              <Text style={styles.buttonText}>
                Welcome to the donate time home screen!
              </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.openModal} style={styles.aboutButton}>
            <Text style={styles.aboutButtonText}>
              About this project
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  },
});

module.exports = GoDoHomeScreen;
