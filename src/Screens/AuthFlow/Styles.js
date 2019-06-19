import { StyleSheet, Dimensions } from 'react-native';
import { 
    widthPercentageToDP as WP, 
    heightPercentageToDP as HP 
} from 'react-native-responsive-screen';

const height = Dimensions.get('window').height;

const AuthStyle = StyleSheet.create({

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
        //height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    }

    // Login Section


});

export { AuthStyle };