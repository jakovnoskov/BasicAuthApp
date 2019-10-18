import React from 'react'
import {
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user'

class Settings extends React.Component {

    logOut = async () => {
        await this.props.userLogout()
        await this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <SafeAreaView style={styles.settingsContainer}>
                <Text style={styles.testTaskTitle}>Test task by Jakov Noskov</Text>
                <Text style={styles.appTitle}>{this.props.curentUser.Name}</Text>
                <Text style={styles.appTitle}>{this.props.account}</Text>
                <Text style={styles.appTitle}>{this.props.curentUser.Currency}</Text>

                <TouchableOpacity
                    style={styles.logOutButtonStyle}
                    onPress={() => this.logOut()}
                >
                    <Text style={styles.logoutTitl1e}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        curentUser: state.user.curentUser,
        account: state.user.account,
    }
}

const mapDispatchToProps = {
    userLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)