import React from 'react'
import {
    View,
    ActivityIndicator,
    Alert,
    TextInput,
    Text,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { fetchApi } from '../../redux/actions/api'
//import JsonRpcClient from '../../common/jsonrpcclient'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            loading: false,
            message: '',
        }
    }

    auth = async () => {
        if (
            typeof Number(this.state.login) == 'number' &&
            this.state.login.toString().length < 10 &&
            this.state.login &&
            this.state.password
        ) {
            this.fetchData()
            //this.props.navigation.navigate('App')
        } else {
            await this.setState({ message: 'Login will be only number. None of the field cannot be empty.' })

            return Alert.alert(
                'Auth Error',
                this.state.message,
            )
        }
    }

    setLogin = (login) => {
        this.setState({ login: Number(login) })
    }

    /*
                    "method":"authorize",
                    "params":{
                        "account":"63482078",
                        "password":"4b1d20da",
                        "application":"test react"
                    }
    */

    fetchData = async () => {
        this.setState({ loading: true })
        /*     const api = new JsonRpcClient({
                endpoint: 'https://api-webtrader.ifxdb.com/',
                headers: {
                  'X-Token': this.state.token
                }
              })
            api.request(
                "authorize",[]
              ).then(function(response) {
                  console.log(response)
                  this.setState({apiResponse: response})
                }.bind(this)) // End .then()
                */

        await this.props.fetchApi({
            params: {
                url: 'https://api-webtrader.ifxdb.com/',
                auth: false,
                method: "POST"
            },
            data: {
                "method": "authorize",
                "params": {
                    "account": "63482078",
                    "password": "4b1d20da",
                    //"application": "test react"
                }
            },
            callbacks: {
                200: ({ status, response }) => {
                    this.setState({ loading: false })
                    if (response && response.completed) {
                        return this.props.setAuth(this.state.login, this.state.password, response)
                    }

                }

            }
        })
    }


    render() {
        return (
            <SafeAreaView>
                <KeyboardAvoidingView
                    contentContainerStyle={styles.authGlobalBox}
                    //keyboardVerticalOffset={20}
                    behavior="position"
                    enabled={true}
                >
                    <ScrollView contentContainerStyle={styles.scrollBox}>
                        <View style={styles.inputSectionWrap}>
                            <View style={styles.authInputBox}>
                                <View style={styles.appLogo}>
                                    <Text style={styles.logoTitle}>Logo</Text>
                                </View>
                                <View style={styles.inputSection}>
                                    <View style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={login => this.setLogin(login)}
                                        placeholder="Username"
                                        placeholderTextColor="#8a8a8a"
                                        autoCapitalize="sentences"
                                    />
                                </View>
                                <View style={styles.inputSection}>
                                    <View style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={password => this.setState({ password })}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                    />
                                </View>
                                <TouchableOpacity
                                    style={styles.loginButtonStyle}
                                    onPress={() => this.auth()}
                                >
                                    <Text style={styles.loginTitle}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

//export default Login

const mapStateToProps = state => {
    console.log(state)
    return {
        //isUserAuth:state.user.isUserAuth,
        login: state.api.login,
        password: state.api.password,
    }
}

const mapDispatchToProps = {
    fetchApi,
    // editCurentUser,
    // saveToken,
    // isUserAuth,
    // setAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
