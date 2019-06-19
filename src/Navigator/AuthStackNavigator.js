import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Common from '../Common';
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
            //headerLeft: null,
            headerTitle: 'Login'
        },
    },
    Signup: {
        screen: Screens.SignupScreen
    }
}, {
        mode: 'modal',
        initialRouteName: 'Login'
    });

export default AuthStack;