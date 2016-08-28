/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 这个是Demo1，主要阐述的是RN 文件的基本架构以及对于每句话的理解
 */

import React, { Component } from 'react';//这主要说的是导入依赖（moud文件的react里面的React和Component）
import {     //主句话主要是导入在moud依赖里面的react-native里面的本js所需要的一些原生组件
  AppRegistry，//注册组件，是一个APP的入口组件，有且只有一个
  Text,		   //文本组件。里面放置文字
  View,         //视图组件，相当于html中的DIV 包裹作用 ，
  SheetStyle,	//样式组件，给组件设定特定的样式，相当于CSS的作用
} from 'react-native';

import App from './app/App.js';//引入外部组件（xxx组件来自于xxx文件，然后这个组价就可以哎本文件中使用了）
class ABC extends  Component{  //定义一个组件类，这个组件类是继承Component，看过JAVA的都应该懂得什么是类
	render(){   //这是‘显示函数’主要返回的是视图的内容，当然，在一个组件类中可以定义很多方法，因为他是类，所以有很多自定义的属性和方法（函数）
		return(
				<View>  //这里注意的是，返回的视图，只有一个顶层文件，即，外层只许有一个包裹曾
					<Text>aaaa</Text>
				</View>
			)
	}
}
var styles=SheetStyle.create({  // 这是采用了样式组件的create函数创建组件的样式，
	contaner:{
		flex:1,
		......
	}
})
AppRegistry.registerComponent('wabg', () => App);// 注册组件的注册函数，将app的入口组价注册到App中，


//以上就是一个js文件（或者说一个页面）react-native的主要设计思想，后面只是加上了很多其他组件而已，，以此类推，然后通过导航将每个这样的页面链接起来
//这样就形成了一个完整的APP。就是这么简单，但是~因为是新技术，所以，组件还是不很完善，需要许多的第三方的组件，很不稳定，坑也是很多，
//技术虽牛逼~但坑也巨多~且行且珍惜！