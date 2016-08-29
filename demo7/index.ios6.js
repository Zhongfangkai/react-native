
/*
  这个Dome主要是介绍了如何使用json数据来‘填充’内容，
  一种是在本文件内定义json，另外一种是在文件外，然后引入到文件内
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  WebView
} from 'react-native';
var demo='http://reactnative.cn/docs/0.26/network.html#content';
class demo2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <WebView source={{uri: 'http://m.jd.com'}}>
        </WebView>
      </View>
    )
  }

}
var styles=StyleSheet.create({
  container:{
    flex:1,

  }
})

AppRegistry.registerComponent('Book', () => demo2);
