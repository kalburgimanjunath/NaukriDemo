import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { CommonStyle } from './Styles';

const Button = (props) => {
    return (
        <TouchableHighlight
            style={CommonStyle.btn_touch_outline}
            onPress={props.clicked}
            underlayColor='transparent'>
            <Text
                style={CommonStyle.btn_text}>
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}

export { Button };