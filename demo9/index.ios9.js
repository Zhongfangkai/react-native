
/*
  ScrollViewz 组件；
  注意 ，1.必须设置高度，不然不显示2.但是不建议使用高度，一般是从内部扩充、3.不建议flex：1设置
  相关属性：1水平：horizontal={true}
  2.自动分页 （只显示一页面）pagingEnabled={true}
  3.用户拖拽时候是否影藏键盘keyboardDismissMode{none、on-drag}
  4.隐藏滚动条：showHozieScrollCator等
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  WebView,
  ScrollView
} from 'react-native';

class yy extends Component{
  render(){
    return(
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={{height:90,backgroundColor:'red',width:300}}></View>
        <View style={{height:90,backgroundColor:'green',width:300}}></View>
        <View style={{height:90,backgroundColor:'red',width:300}}></View>
        <View style={{height:90,backgroundColor:'green',width:300}}></View>
        <View style={{height:90,backgroundColor:'red',width:300}}></View>
      </ScrollView>
    )
  }
}
//一般连续行的，都可以用数组来返回 详见下图
var styles=StyleSheet.create({

})

AppRegistry.registerComponent('Book', () => yy );

