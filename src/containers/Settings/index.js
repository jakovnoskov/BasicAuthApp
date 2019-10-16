import React from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import styles from './styles'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.container}>Settings</Text>
            </View>
        )
    }
}

export default Settings