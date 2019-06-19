import React from 'react';
import {
    View,
    TouchableHighlight
} from 'react-native';
import { AuthStyle } from './Styles';
import * as Common from '../../Common';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={AuthStyle.wrapper}>
                <Common.Input placeTitle="Email address" secureText={false} />
                <View>
                    <Common.Input placeTitle="Password" secureText={true} />
                    <TouchableHighlight
                        style={{ position: 'absolute', top: 15, right: 2 }}
                        underlayColor='transparent'>
                        <Common.ImageComp
                            imageUrl={require('../../assets/imgs/visible.png')}
                            wth={30} hth={30} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export { LoginScreen }; 