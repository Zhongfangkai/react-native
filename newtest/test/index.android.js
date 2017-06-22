import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import List from './listView/index'
// import Home from './picker'
import Home from './camera';
class Example extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Home />
    )
  }
}
AppRegistry.registerComponent('test', () => Example);
