import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Containers from '../containers'

const AppStack = createStackNavigator(
    {
        UserPage: {
            screen: Containers.UserPage,
        },
        Settings: {
            screen: Containers.Settings,
        },
    },
    {
        initialRouteName: 'UserPage',
        headerMode: 'none',
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