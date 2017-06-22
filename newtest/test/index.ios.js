import React, { Component } from 'react';
import {AppRegistry,View,Text,AsyncStorage,ListView} from 'react-native';
// import Home from './timeLine/home';
// import Home from './animate/home'
// import Home from './picker'
// import Home from './keyboard/home';
//组件：相机和相册的功能 react-native-image-picker
// import Home from './camera';
//网络状况
// import Home from './network'
//获取第三方网站的数据：百度.js
// import Home from './baidu';

// import Home from './message';
import Home from './elements';

class Example extends Component {
  constructor(props) {
  super(props);
}
render() {
  return (
    <Home/>
  );
}
}
AppRegistry.registerComponent('test', () => Example);
