# react-native
react-native的基本使用
MAC for ios 
#基础配置  
1.Homebrew ：类似于app store的软件商店   brew  -v 查看版本  
2. node  node -v  
3. watchman  watchman -v  
##注释：初始化的时候需要翻墙  ---》蓝灯  
参考文档：官网-http://reactnative.cn/docs/0.30/getting-started.html#content    
          https://segmentfault.com/a/1190000003915315

#推荐文档入门教程；http://www.oschina.net/translate/going-native-with-react  
#实战化教程：江青青博客  
http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native-for-android%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%BB%A5%E5%8F%8A%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%AE%9E%E4%BE%8B/ 

#一个简单的文档  
```js
//一个关于react-native  的简单实现 
'use strict'//使用js的严格模式 便于查找错误所在
var React=require('react-native');
/**require函数是node中的一个引入（加载）模块的作用；其作用如代码:
 先建立一个one.js文件：var name="allen";
                     exports.name=name;这句话的意思是创建函数模块eg：export.arc=function(){alert("a")}
 然后在建立一个2.js: var two=requrie('./one.js'); 
                     conlose.log(one.name)
                     one.arc()等等*/
React=var{
			AppRegistry,
			StyleSheet,
			Text,
			View,
			};    //当前的文件所用到的组件（原生组件以及其他的组件）
var first=React.creatClass(｛        //创建组件
		render:function(){
			<View style={styles.container}> //view组件的样式是styles.container
				<Text style={styles.welcome}> //同上
					Welome to allen 
				</Text>
				<Text style={styles.instruction}>
					hello fuck
				</Text>//只能有一个顶层元素
			</View>
		}

	｝)
var styles=StyleSheet.creat({  //创建css样式组件 主要是采用flex的布局方式
	container:{         某个样式，相当于css
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'red'   //采用的是js的样式写法以逗号分开 ，
	}
	welcome:{
		fontSize:20,
		textAlign:'center',
		margin:10,
	}
})
```
# 一 个简单的页面跳转  
```js

import React, { Component } from 'react';//导入react的组建
import {//需要的组建导入
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import NextTowPage from './NextTowPage' //导入需要跳转的页面
import test from './test'


export default class NextPage extends Component { //申明关系
  constructor(props) {
    super(props)

  }

  render(){
    const {navigator} = this.props;
    return(
      <View style={{padding:50,borderWidth:1,}}>
        <TouchableHighlight
          onPress={()=>{
            navigator.push({ title: 'Awesome Scene', index: 0 ,component:NextTowPage})//注意
          }}>
          <Text style={{fontSize:50,}}>sdds</Text>


        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=>{
            navigator.push({ title: 'Awesome Scene', index: 0 ,component:test})
          }}>
          <Text style={{fontSize:20,}}>sdds</Text>


        </TouchableHighlight>
      </View>
    )
  }
}
  ```
#一个简单的组件  
```js
1.创建组件
class xxx extends Component{
render(){
	return(
	//具体组件内容 属性{this.props.xxx}
	)
}
}
2.使用组件  
<xxx title="aaa"/> //添加相应的属性
```
