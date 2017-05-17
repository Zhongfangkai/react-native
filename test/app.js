import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './home';
import store from './store';

export default class test extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}
