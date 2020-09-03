/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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
import Homepage from './src/screen/Homepage';
import Details from './src/screen/Details';
import TabNavigator from './src/navigator/TabNavigator';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class App extends React.Component {
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
        ? 'home'
        : 'home'
      } else if (route.name === 'Settings') {
      iconName = focused ?
        'settings' :
        'settings'
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} />;
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

export default App;
