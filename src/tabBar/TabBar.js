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
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabBar extends React.Component{




  render(){
    const {deger} = this.props;
    console.log(deger);
    return(
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Trendyol', style: { color: '#fff' } }}
        rightComponent=
          {
            this.props.deger === 0  ?
            <Ionicons name='md-cart-outline' color= '#fff' size={25}>
            </Ionicons>
            :
            <View>
            <Text style={styles.productCounter}>
            {this.props.deger}</Text>
            <Ionicons name='md-cart-outline' color= '#fff' size={25}>
            </Ionicons>
            </View>
          }

      />
    )
  }
}

const styles = StyleSheet.create({
  productCounter: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 0,
    color: '#fff',
  }
});

export default TabBar;
