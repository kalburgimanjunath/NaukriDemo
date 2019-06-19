import { StyleSheet } from 'react-native';
import { 
    widthPercentageToDP as WP, 
    heightPercentageToDP as HP 
} from 'react-native-responsive-screen';

const CommonStyle = StyleSheet.create({
    btn_touch_outline: {
        width: WP('95%'),
        borderWidth: 2,
        borderColor: '#1a4e5d',
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    btn_text: {
        fontSize: 18,
        color: '#1a4e5d'
    },
    InputStyle: {
        width: WP('90%'), 
        height: HP('6.2%'), 
        backgroundColor: 'transparent', 
        paddingLeft: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#1a4e5d',
        fontSize: 17,
        marginTop: 7,
        marginBottom: 7
    }
});

export { CommonStyle };