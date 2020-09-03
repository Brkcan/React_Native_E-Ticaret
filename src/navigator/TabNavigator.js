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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabNavigator extends React.Component{
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
      iconName = focused
        ? 'ios-home'
        : 'md-information-circle-outline'
      } else if (route.name === 'Settings') {
      iconName = focused ?
        'md-home' :
        'md-build-outline'
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
      },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Settings" component={Details} />
      </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default TabNavigator;
