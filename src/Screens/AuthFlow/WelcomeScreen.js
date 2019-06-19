import React from 'react';
import {
    View,
} from 'react-native';
import { AuthStyle } from './Styles';
import * as Common from '../../Common';

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    touchHandler = (action) => {
        this.props.navigation.navigate(action);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={AuthStyle.Welcome_upr_View}>
                    <Common.ImageComp imageUrl={require('../../assets/imgs/logo.png')} wth={180} hth={180} />
                </View>

                <View style={AuthStyle.Welcome_Btm_View_container}>
                    <View style={AuthStyle.Welcome_Btm_View}>
                        <Common.Button title="Login" clicked={() => this.touchHandler('Login')} />
                        <Common.Button title="Signup" clicked={() => this.touchHandler('Signup')} />
                    </View>
                </View>
            </View>
        );
    }
}

export { WelcomeScreen };