import React from 'react';
import { Header } from 'react-navigation';
import {
    View,
    TouchableHighlight,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { CommonStyle } from '../../Styles/CommonStyle';
import * as Common from '../../Common';

class SignupScreen extends React.Component {
    constructor(props) {
        super(props)
        this.fullNameRef = React.createRef();
        this.emailAddressRef = React.createRef();
    };

    /* lifecycle methods place here */

    componentDidMount() {
        this.fullNameRef.current.focus();
    }

    /* lifecycle methods end here */

    onSignupHandler = () => {
        alert('fetch image');
    }

    handleNextInput = (refr) => {
        console.log(refr);
    }

    render() {
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={Header.HEIGHT + 30}
                style={{ flex: 1, alignItems: 'center' }}
                behavior="padding">
                <ScrollView
                    contentContainerStyle={{ alignItems: 'center' }}>
                    <TouchableHighlight
                        style={{ marginTop: 15, marginBottom: 30 }}
                        underlayColor='transparent'
                        onPress={() => this.onSignupHandler()}>
                        <Common.ImageComp
                            imageUrl={require('../../assets/imgs/user.png')}
                            wth={150}
                            hth={150} />
                    </TouchableHighlight>

                    <Common.Input
                        placeTitle="Full Name"
                        textStyle={CommonStyle.InputStyle}
                        autoCorrect={false}
                        returnKeyType="next"
                        secureText={false}
                        myRef={this.fullNameRef}
                        onSubmitEditing={() => this.handleNextInput(this.emailaddress)} />
                    <Common.Input
                        placeTitle="Email address"
                        textStyle={CommonStyle.InputStyle}
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        myRef={this.emailAddressRef}
                        secureText={false} />
                    <Common.Input
                        placeTitle="Password"
                        secureText={true}
                        autoCorrect={false}
                        clearTextOnFocus={true}
                        returnKeyType="next"
                        textStyle={CommonStyle.InputStyle} />
                    <Common.Input
                        placeTitle="Confirm Password"
                        secureText={true}
                        autoCorrect={false}
                        clearTextOnFocus={true}
                        returnKeyType="next"
                        textStyle={CommonStyle.InputStyle} />
                    <Common.Input
                        placeTitle="Mobile Number"
                        secureText={false}
                        autoCorrect={false}
                        keyboardType="numeric"
                        clearTextOnFocus={true}
                        textStyle={CommonStyle.InputStyle} />
                    <Common.Button
                        title="Submit"
                        txtStyle={CommonStyle.btn_touch_block_text}
                        customStyle={[CommonStyle.topMargin, CommonStyle.btn_touch_block]} />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export { SignupScreen }; 