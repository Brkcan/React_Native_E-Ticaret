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
import { Card, ListItem, Button, Icon,Header } from 'react-native-elements'
import MyCustomRightComponent from '../tabBar/MyCustomRightComponent';
import TabBar from '../tabBar/TabBar';

class Homepage extends React.Component{

state = {
  buy: false,
  deger: 0,
}

onBuy = (deger) => {
  console.log("Satın alındı...");
  this.setState({
    buy: true,
    deger: this.state.deger + 1,
  })
  console.log(this.state.buy);
  console.log(this.state.deger);

}

  render() {

    return(
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TabBar deger={this.state.deger}/>
      <ScrollView>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../images/pic3.jpg')}>
        </Card.Image>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Button
            icon={<Icon name='shop' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 90}}
            title='Buy'
            onPress={this.onBuy}
            />
            <Text style={{marginLeft: 40, width: 80, fontWeight: 'bold', fontSize: 20}}>
              $10.99
            </Text>
            </View>
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../images/pic2.jpg')}>
        </Card.Image>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../images/pic2.jpg')}>
        </Card.Image>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
      </Card>
      </ScrollView>
      </View>
    )
  }
}

export default Homepage;
