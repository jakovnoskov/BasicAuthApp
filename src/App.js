import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from "./navigation/navigation";
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}