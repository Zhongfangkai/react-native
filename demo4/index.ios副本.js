/*demo 4 这里主要介绍的是获取屏幕的大小和分辨率
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
var Dime=require('Dimensions');  // 这里引入的是查看屏幕大小、分辨率的库，在react-native的labrila里面的Unitly里面，是系统自带的
class demo2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>周杰伦{Dime.get('window').width}</Text>  宽的
        <Text>周杰伦{Dime.get('window').height}</Text> 高
        <Text>周杰伦{Dime.get('window').scale}</Text>  缩放大小
      </View>
    )
  }
}
var styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

AppRegistry.registerComponent('Book', () => demo2);
