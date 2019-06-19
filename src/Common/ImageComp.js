import React from 'react';
import { Image } from 'react-native';
const ImageComp = (props) => {
    return (
        <Image
            source={props.imageUrl}
            style={{ width: props.wth, height: props.hth }} />
    );
}
export { ImageComp };