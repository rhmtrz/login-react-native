import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Login extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#004ba0',
  }

})
