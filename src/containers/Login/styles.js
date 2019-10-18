import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    authGlobalBox:{
       position:'relative' 
    },
    scrollBox:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appLogo: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    authInputBox: {
        width:320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#e9e9e9',
        marginBottom: 7,
        padding: 10,
    },
    icon: {
        backgroundColor: '#d4d4d4',
        borderRadius: 50,
        width: 15,
        height: 15,
        marginRight: 10,
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        backgroundColor: '#e9e9e9',
        color: '#424242',
    },
    loginButtonStyle: {
        backgroundColor: '#f68b18',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottomWidth: 4,
        borderRadius: 4,
        borderColor: '#cd7638',
        width:'100%',
        height:41
    },
    loginTitle: {
        fontWeight: 'bold',
    },
    logoTitle: {
        paddingTop: 140,
        paddingBottom: 140,
        fontSize: 17,
        flex: 1,
        textAlign: 'center',
        textTransform: 'uppercase'
    }

})
