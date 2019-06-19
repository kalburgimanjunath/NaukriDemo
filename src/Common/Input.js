import React from 'react';
import {
    TextInput
} from 'react-native';
import { CommonStyle } from './Styles';

const Input = (props) => {
    return (
        <TextInput
            placeholder={props.placeTitle}
            placeholderTextColor='#1a4e5d'
            style={CommonStyle.InputStyle} 
            secureTextEntry={props.secureText}/>
    );
}

export { Input };