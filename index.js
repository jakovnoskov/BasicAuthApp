import {AppRegistry, YellowBox } from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'
import 'react-native-gesture-handler'

YellowBox.ignoreWarnings([
    'Remote debugger',
    'Require cycles',
    'Require cycles:',
    'Battery state',
    'componentWillMount',
    'componentWillUpdate',
    'componentWillReceiveProps',
    '[location] ERROR - 0',
    'Warning: DatePickerAndroid', 
    'RCTRootView cancelTouches',
  ])

AppRegistry.registerComponent(appName, () => App)