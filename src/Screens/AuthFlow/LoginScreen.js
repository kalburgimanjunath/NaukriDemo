import React from 'react';
import {
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import { CommonStyle } from '../../Styles/CommonStyle';
import * as Common from '../../Common';

class LoginScreen extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
                <Common.ImageComp 
                    imageUrl={require('../../assets/imgs/logo.png')} 
                    wth={180} 
                    hth={180} />
                <Common.Input
                    placeTitle="Email address"
                    textStyle={CommonStyle.InputStyle}
                    secureText={false} />
                <View>
                    <Common.Input
                        placeTitle="Password"
                        secureText={true}
                        textStyle={CommonStyle.InputStyle} />

                    <TouchableHighlight
                        style={{ position: 'absolute', top: 15, right: 2 }}
                        underlayColor='transparent'>
                        <Common.ImageComp
                            imageUrl={require('../../assets/imgs/visible.png')}
                            wth={30} hth={30} />
                    </TouchableHighlight>
                </View>
                <Common.Button
                    title="Submit"
                    customStyle={[CommonStyle.topMargin, CommonStyle.btn_touch_block]}
                    txtStyle={CommonStyle.btn_touch_block_text}/>
            </ScrollView>
        );
    }
}

export { LoginScreen }; 