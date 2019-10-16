import {AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'Remote debugger',
    'Require cycles',
    'Require cycles:',
  ])

AppRegistry.registerComponent(appName, () => App);