import React from 'react';
import {Root} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './src/Screens/User/Home';
import OrderPage from './src/Screens/User/orderform';
import Thanks from './src/Screens/User/thanksPage';
import Icon from 'react-native-vector-icons/FontAwesome'
import {View} from 'react-native'
const AppStack = createStackNavigator({
    Home: {screen: Home},
    Order:{screen:OrderPage},
    Thanks:{screen:Thanks}
},{
    initialRouteName: 'Home',
    headerMode:'float',
    defaultNavigationOptions: ({navigation}:any) => ({
        title: 'The Jewell Store',
        headerStyle: {
            backgroundColor: '#0c2430',
            elevation: 0
        },
        gestureEnabled: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignContent:'center',
            alignItems:'center',
        },
        // headerLeft:() =>
        //     <View style={{marginLeft: 10}}><Icon name="bars" size={20} color="#fff" onPress={() => navigation.toggleDrawer()} /></View>,
        // headerRight: () => <View style={{marginRight: 10}}><Icon name="power-off" size={20} color="#fff" /></View>
    }),

});

const SwitchNav = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  },
);
const AppContainer = createAppContainer(SwitchNav);
export default () => (
  <Root>
    <AppContainer />
  </Root>
);
