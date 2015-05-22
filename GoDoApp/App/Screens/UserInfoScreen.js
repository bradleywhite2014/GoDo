'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} = React;

var Video = require('react-native-video');
var UserStoreSync = require('../Mixins/UserStoreSync');
var UserStore = require('../Stores/UserStore');
var UserActions = require('../Actions/UserActions');
var styles = require('./Styles');

var UserInfoScreen = React.createClass({
  mixins: [UserStoreSync],

  GoDo(){
    this.props.navigator.replace({id: 'goDo-home'});
  },

  afterUpdateUserFromStore() {
    var user = UserStore.getState();

    if (!user.get('email')) {
      this.props.navigator.replace({id: 'authenticate'});
    }
  },

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.backgroundOverlay} />

        <View style={styles.contentContainer}>
          <Image source={{uri: this.state.user.getIn(['picture', 'data', 'url'])}}
                 style={styles.profilePicture} />
          <Text style={styles.name}>
            {this.state.user.get('name')}
          </Text>

          <TouchableOpacity onPress={UserActions.signOut}>
            <Text>Sign out</Text>
          </TouchableOpacity>
          <Text style={styles.name} onPress={this.GoDo}>
            Continue
          </Text>
        </View>
      </View>
    )
  }
});

module.exports = UserInfoScreen;
