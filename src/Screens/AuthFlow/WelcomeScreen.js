import React from 'react';
import {
    View,
} from 'react-native';
import { CommonStyle } from '../../Styles/CommonStyle';
import * as Common from '../../Common';

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    touchHandler = (action) => {
        this.props.navigation.navigate(action);
    }

    render() {
        console.disableYellowBox = true; // disable yellow warnning msg
        return (
            <View style={{ flex: 1 }}>
                <View style={CommonStyle.Welcome_upr_View}>
                    <Common.ImageComp 
                        imageUrl={require('../../assets/imgs/logo.png')} 
                        wth={180} 
                        hth={180} />
                </View>

                <View style={CommonStyle.Welcome_Btm_View_container}>
                    <View style={CommonStyle.Welcome_Btm_View}>
                        <Common.Button
                            title="Login"
                            customStyle={[CommonStyle.btn_touch_outline]}
                            txtStyle={CommonStyle.btn_touch_outline_text}
                            clicked={() => this.touchHandler('Login')} />
                        <Common.Button
                            title="Signup"
                            customStyle={[CommonStyle.btn_touch_outline]}
                            txtStyle={CommonStyle.btn_touch_outline_text}
                            clicked={() => this.touchHandler('Signup')} />
                    </View>
                </View>
            </View>
        );
    }
}

export { WelcomeScreen };