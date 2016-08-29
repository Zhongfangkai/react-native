
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
} from 'react-native';
var share={   // 定义一个json数据  或者在外部定义，然后引入：var  jj=require（‘./share.json’）
  "data" : [
    {
       "icon" : "icon1",
       "title" : "小码哥分享"
    },
    {
      "icon" : "icon8",
      "title" : "微博分享"
    },
    {
      "icon" : "icon9",
      "title" : "朋友圈分享"
    },
    {
      "icon" : "icon10",
      "title" : "短信分享"
    }
  ]
}
class demo2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>{share.data[0].title}</Text>//我们可以直接的去展示Text里面的数据，亦可以同函数的形式呈现
        <Text>{share.data.length}</Text>
         {this.abc()}  //自定义一个函数，函数的返回值就是所要显示的内容
      </View>
    )
  }
  abc(){
    var zone=[]//新建一个数组，专门用来存储一个合成组件
    //遍历json数据
    for(var i=0;i<=share.data.length){
      // 取出单一个组件的数据
      var dlist=share.data[i];
      zone.push(
        <View key={i}> //给每个View添加标示
          <Text>{share.data[i].title}</Text>   //将想要的组件Push到zone数组中，
        </View>
      )
      return zone //返回数组（返回组件）
    }
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
