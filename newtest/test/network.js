//第三方组件 picker
import React, { Component } from 'react';
 import {
Animated,
Easing,
View,
StyleSheet,
Text,
TouchableOpacity,
NetInfo,
 } from 'react-native';
import Picker from 'react-native-picker';
import tools from './tools';
var time=new Date().getFullYear();
class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
   History:""
 }
}
//网络监听
componentDidMount() {
  NetInfo.addEventListener(
      'change',
      this._handleConnectionInfoChange
  )
}
//移除监听
componentWillUnmount() {
  NetInfo.removeEventListener(
      'change',
      this._handleConnectionInfoChange
  )
}
_handleConnectionInfoChange(connectionInfo) {
    alert(connectionInfo);
    // NetInfo.fetch().done((reach) => {
    //   console.log('Initial: ' + reach);
    // });
    NetInfo.isConnected.fetch().done((isConnected) => {
  console.log('First, is ' + (isConnected ? 'online' : 'offline'));
});
  }
  render(){
    return(
      <View style={{marginTop:200}}>
           <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
      </View>
    )
  }

}

export default Home;
