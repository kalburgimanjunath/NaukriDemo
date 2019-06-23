import React from 'react';
import { Header } from 'react-navigation';
import {
    View,
    TouchableHighlight,
    ScrollView,
    KeyboardAvoidingView,
    Modal,
    Text
} from 'react-native';
import { CommonStyle } from '../../Styles/CommonStyle';
import * as Common from '../../Common';

class SignupScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };

        // create ref for textinput
        this.fullNameRef = React.createRef();
        this.emailAddressRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordConfRef = React.createRef();
        this.mobileNumRef = React.createRef();

        this.clodeModalRef = React.createRef();
    };

    /* lifecycle methods place here */

    componentDidMount() {
        //this.fullNameRef.current.focus();
    }

    /* lifecycle methods end here */

    onSignupHandler = () => {
        
    }

    // handler for modal view visiblity
    onCloseModalViewHandler = ()=>{
        this.setState({modalVisible: false});
    }

    // imageSelectHandler 
    imageSelectHandler = (action)=>{
        alert(action);
    }

    // handle for next Textinput focus visiblity
    handleNextInput = (action) => {
        if(action == "email"){
            this.emailAddressRef.current.focus();
        }else if(action == "password"){
            this.passwordRef.current.focus();
        }else if(action == "passwordConf"){
            this.passwordConfRef.current.focus();
        }else if(action == "mobileNum"){
            this.mobileNumRef.current.focus();
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={Header.HEIGHT + 30}
                style={{ flex: 1, alignItems: 'center'}}
                behavior="padding">
                <ScrollView
                    contentContainerStyle={{ alignItems: 'center' }}>
                    <TouchableHighlight
                        style={{ marginTop: 15, marginBottom: 30 }}
                        underlayColor='transparent'
                        onPress={() => this.setState({modalVisible: true})}>
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
                        ref={this.fullNameRef}
                        onSubmitEditing={() => this.handleNextInput('email')} />
                    <Common.Input
                        placeTitle="Email address"
                        textStyle={CommonStyle.InputStyle}
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={this.emailAddressRef}
                        secureText={false} 
                        onSubmitEditing={() => this.handleNextInput('password')}/>
                    <Common.Input
                        placeTitle="Password"
                        secureText={true}
                        autoCorrect={false}
                        clearTextOnFocus={true}
                        returnKeyType="next"
                        ref={this.passwordRef}
                        textStyle={CommonStyle.InputStyle} 
                        onSubmitEditing={() => this.handleNextInput('passwordConf')}/>
                    <Common.Input
                        placeTitle="Confirm Password"
                        secureText={true}
                        autoCorrect={false}
                        clearTextOnFocus={true}
                        returnKeyType="next"
                        ref={this.passwordConfRef}
                        textStyle={CommonStyle.InputStyle} 
                        onSubmitEditing={() => this.handleNextInput('mobileNum')}/>
                    <Common.Input
                        placeTitle="Mobile Number"
                        secureText={false}
                        autoCorrect={false}
                        keyboardType="numeric"
                        clearTextOnFocus={true}
                        ref={this.mobileNumRef}
                        textStyle={CommonStyle.InputStyle} />
                    <Common.Button
                        title="Submit"
                        txtStyle={CommonStyle.btn_touch_block_text}
                        customStyle={[CommonStyle.topMargin, CommonStyle.btn_touch_block]} 
                        clicked={()=>this.onCloseModalViewHandler()}/>
                </ScrollView>
                <Common.ModalComp 
                    modalStatus={this.state.modalVisible}
                    closeModalHandler={()=>this.onCloseModalViewHandler()}
                    chooseGalleryImage={()=>this.imageSelectHandler('gallery')}
                    chooseCameraImage={()=>this.imageSelectHandler('camera')}/>
            </KeyboardAvoidingView>
        );
    }
}

export { SignupScreen }; 