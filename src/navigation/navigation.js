import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Containers from '../containers'

const AppStack = createStackNavigator(
    {
        UserPage: {
            screen: Containers.UserPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Basic Auth App',
                headerRight: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                    >
                        <Text style={{marginRight:10}}>Settings </Text >
                    </TouchableOpacity>
                )
            }),
        },
        Settings: {
            screen: Containers.Settings,
            navigationOptions: {
                title: 'Settings',
            },
        },
    },
    {
        initialRouteName: 'UserPage',
    }
)

const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: Containers.Login,
        },
    },
    {
        headerMode: 'none',
    }
)

const AppNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
)

const AppContainer = createAppContainer(AppNavigator)

export { AppContainer }