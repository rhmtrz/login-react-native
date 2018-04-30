import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Title extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../image/logo.png') }/>
        <Text style={{fontSize: 20, color: 'white'}}>Welcome to my first App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#004ba0',
    alignItems: 'center',
    flex: 2,
  },
  logo : {
    width: 70,
    height: 90,
    color: 'rgba(255, 255, 255, 0.7)',
  }
})
