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
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyCustomRightComponent extends React.Component {

  constructor (props){
    super(props);
  }

  render () {

    console.log(this.props.deger);
    return (
      <View style={{width:150, marginLeft: 100, marginBottom: 25}}>

        <Header
          rightComponent={ <Ionicons name='md-cart-outline' color= '#fff' size={25}/> }
        >
        </Header>
        <Text style={{marginBottom:20,fontSize: 30}}>{this.props.deger}BURAKKK</Text>
      </View>
    )
  }
}

export default MyCustomRightComponent;
