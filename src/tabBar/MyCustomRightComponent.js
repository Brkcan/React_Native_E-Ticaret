/**
* Author Burak Can
*/

import React, { useState }  from 'react';
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

const MyCustomRightComponent = (props) => {

  const[deger, setDeger] = useState();

    return (
      <View style={{width:150, marginLeft: 100, marginBottom: 25}}>
        
        <Header
          setDeger={props.deger}
          rightComponent={ <Ionicons name='md-cart-outline' color= '#fff' size={25}/> }
        >
        </Header>
      </View>
    )
  }

export default MyCustomRightComponent;
