var FacebookLoginManager = require('NativeModules').FacebookLoginManager;
var dispatcher = require('../AppDispatcher');
var UserStore = require('../Stores/UserStore');
var UserConstants = require('../Constants/UserConstants');
var FacebookApi = require('../Apis/FacebookApi');
var AlertIOS = require('react-native').AlertIOS;

module.exports = {
  newFacebookSession() {
    FacebookLoginManager.newSession((error, info) => {
      if (error) {
        AlertIOS.alert('Unable to sign in');
      } else {
        FacebookApi.getUserInfo(info.userId, info.token);
      }
    });
  },

  signOut() {
    dispatcher.handleViewAction({
      actionType: UserConstants.SIGN_OUT
    });
  },
  loadTimeScreen() {
    dispatcher.handleViewAction({
      actionType: UserConstants.TIME_SCREEN
    });
  },
  loadHomeScreen() {
    dispatcher.handleViewAction({
      actionType: UserConstants.HOME_SCREEN
    });
  },
  loadMoneyScreen() {
    dispatcher.handleViewAction({
      actionType: UserConstants.MONEY_SCREEN
    });
  }

}
