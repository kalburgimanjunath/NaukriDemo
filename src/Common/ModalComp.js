import React from 'react';
import {
    Modal,
    View,
    Text,
} from 'react-native';
import * as Common from '../Common';
import { CommonStyle } from '../Styles/CommonStyle';

const ModalComp = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.modalStatus}
            animationType="slide">

            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ width: '100%', height: '30%' }}>
                    <View style={{ height: '15%', width: '100%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 20, color: '#fff' }}>Choose your image</Text>
                    </View>
                    <View style={{ height: '85%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '90%', backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderColor: '#ccc', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Common.Button
                                title="Gallery"
                                txtStyle={CommonStyle.actionsheet_text}
                                customStyle={[CommonStyle.actionsheet_button]} 
                                clicked={props.chooseGalleryImage}/>

                            <View style={{ height: 1, width: '100%', backgroundColor: '#ccc' }}></View>
                            
                            <Common.Button
                                title="Camera"
                                txtStyle={CommonStyle.actionsheet_text}
                                customStyle={[CommonStyle.actionsheet_button]} 
                                clicked={props.chooseCameraImage}/>
                        </View>
                        <Common.Button
                            title="Cancel"
                            txtStyle={CommonStyle.actionsheet_text}
                            customStyle={[CommonStyle.actionsheet_cancel, CommonStyle.top10Margin, CommonStyle.bottom10Margin]} 
                            clicked={props.closeModalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export { ModalComp };