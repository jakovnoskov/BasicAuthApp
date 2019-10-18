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

import {
    setAuth
    }
  from '../../redux/actions/user'

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
        } else {
            await this.setState({
                message: 'Login will be only number. None of the field cannot be empty.'
            })
            return Alert.alert(
                'Auth Error',
                this.state.message,
            )
        }
    }

    setLogin = (login) => {
        this.setState({ login: Number(login) })
    }

    fetchData = async () => {
        this.setState({ loading: true })

        this.props.fetchApi({
            params: {
                url: 'https://api-webtrader.ifxdb.com/',
                auth: false,
                method: "POST"
            },
            data: {
                "method": "authorize",
                "params": {
                    "account": this.state.login,
                    "password": this.state.password,
                    "application": "test react"
                }
            },
            callbacks: {
                200: async ({ status, response }) => {
                    await this.setState({ loading: false })
                    if (response && response.result) {
                        await this.props.setAuth(response.result) 
                        await this.props.navigation.navigate('App')
                    }
                },
                'fail': async ({ status, response }) => {
                    this.setState({ loading: false })
                    return Alert.alert(
                        'Auth Error',
                        typeof response.error.message === "string" ? response.error.message : null,
                    )
                },
            }
        })
    }


    render() {
        return (
            <SafeAreaView>
                <KeyboardAvoidingView
                    contentContainerStyle={styles.authGlobalBox}
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
                                    {!this.state.loading ?
                                        <Text style={styles.loginTitl1e}>Login</Text>
                                        :
                                        <ActivityIndicator size="small" color="#000" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        login: state.api.login,
        password: state.api.password,
    }
}

const mapDispatchToProps = {
    fetchApi,
    setAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
