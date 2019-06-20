import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Screens from '../Screens';

const AuthStack = createStackNavigator({
    Welcome: {
        screen: Screens.WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Screens.LoginScreen,
        navigationOptions: {
            headerTitle: 'Login',
        },
    },
    Signup: {
        screen: Screens.SignupScreen,
        navigationOptions: {
            headerTitle: 'Signup',
        },
    }
}, {
        mode: 'modal',
        //initialRouteName: 'Welcome',
        headerBackTitleVisible: false
    });

export default AuthStack;