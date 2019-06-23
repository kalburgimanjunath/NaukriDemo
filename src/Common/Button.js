import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
    console.log("*********");
    console.log(props);
    return (
        <TouchableHighlight
            style={[...props.customStyle]}
            onPress={props.clicked}
            underlayColor='transparent'>
            <Text
                style={props.txtStyle}>
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}

export { Button };