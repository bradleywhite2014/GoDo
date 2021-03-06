'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  View,
  Stylesheet,
} = React;

var LocalStorage = require('./Stores/LocalStorage');
var UserStore = require('./Stores/UserStore');
var UserInfoScreen = require('./Screens/UserInfoScreen');
var LoginScreen = require('./Screens/LoginScreen');
var GoDoHomeScreen = require('./Screens/GoDoHomeScreen');
var DonateTime = require('./Screens/DonateTime');
var DonateMoney = require('./Screens/DonateMoney');

var GoDoApp = React.createClass({
  getInitialState() {
    return {bootstrapped: false}
  },

  componentWillMount() {
    LocalStorage.bootstrap(() => this.setState({bootstrapped: true}));
  },

  renderScene(route, nav) {
    switch (route.id) {
      case 'authenticate':
        return <LoginScreen navigator={nav} />;
      case 'user-info':
        return <UserInfoScreen navigator={nav} />;
      case 'goDo-home':
        return <GoDoHomeScreen navigator={nav} />;
      case 'time-home':
        return <DonateTime navigator={nav} />;
      case 'money-home':
        return <DonateMoney navigator={nav} />;
      default:
        return <View />;
    }
  },

  render() {
    if (this.state.bootstrapped === false) {
      return <View />
    }

    return (
      <Navigator
        initialRoute={{ id: 'authenticate', }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }
})

AppRegistry.registerComponent('GoDoApp', () => GoDoApp);
