import { StyleSheet, Dimensions } from 'react-native';
import { 
    widthPercentageToDP as WP, 
    heightPercentageToDP as HP 
} from 'react-native-responsive-screen';

const height = Dimensions.get('window').height;
const CommonStyle = StyleSheet.create({

    /**
     *  Welcome Section
     */

    wrapper : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    Welcome_upr_View: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    Welcome_Btm_View_container : {
        flex: 1,  
        justifyContent: 'flex-end'
    },
    Welcome_Btm_View : {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 70,
    },
    /**
     *  Welcome Section end
     */

    

    /* 
        Button, Input, Image Styles
    */
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
    btn_touch_outline_text: {
        fontSize: 18,
        color: '#1a4e5d'
    },
    btn_touch_block: {
        width: WP('95%'),
        borderWidth: 1,
        borderColor: '#ccc',
        height: 50,
        backgroundColor: '#1a4e5d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_touch_block_text: {
        fontSize: 18,
        color: '#fff'
    },

    InputStyle: {
        width: WP('95%'), 
        height: HP('6.2%'), 
        backgroundColor: 'transparent', 
        paddingLeft: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#1a4e5d',
        fontSize: 17,
        marginTop: 7,
        marginBottom: 7
    },

    /**
     * -----------------------------
     */

     

    /* 
        Custom styles
    */
    topMargin: {
        marginTop: 15
    },
    
});

export { CommonStyle };