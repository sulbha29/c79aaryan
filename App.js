import React from 'react';
import { Text, View } from 'react-native';
import Login from './screens/login'
import {AppTabNavigator} from './components/apptabnavigator'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
export default function App() {
  return (
   <Appcontainer/>
   
  );
}
const switchnav = createSwitchNavigator({
  Loginscreen:{screen:Login},
  BottomTab:{screen:AppTabNavigator}
})

const Appcontainer = createAppContainer(switchnav)



