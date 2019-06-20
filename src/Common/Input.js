import React from 'react';
import {
    TextInput
} from 'react-native';

const Input = (props) => {
    return (
        <TextInput
            placeholder={props.placeTitle}
            placeholderTextColor='#1a4e5d'
            style={props.textStyle}
            secureTextEntry={props.secureText}
            ref={props.myRef}
            {...props}/>
    );
}

export { Input };