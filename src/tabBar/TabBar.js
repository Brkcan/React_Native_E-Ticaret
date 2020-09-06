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
  Image,
} from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
import MyCustomRightComponent from './MyCustomRightComponent';

class TabBar extends React.Component{

  render(){
    return(
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Trendyol', style: { color: '#fff' } }}
        rightComponent={<MyCustomRightComponent />}
      />
    )
  }
}

export default TabBar;
