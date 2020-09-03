/**
* Author Burak Can
*/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '../screen/Homepage';
import Details from '../screen/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';

class DrawerNavigator extends React.Component{

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Homepage" component={Homepage} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default DrawerNavigator;
