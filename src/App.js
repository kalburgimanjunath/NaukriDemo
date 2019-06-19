import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as Screens from './Screens';
import AuthStackNavigator from './Navigator/AuthStackNavigator';

export default class App extends Component{
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = createAppContainer(AuthStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efe5fd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
