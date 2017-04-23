# react-native
react-native的基本使用
我的博客笔记地址：[点击查看](http://www.cnblogs.com/allenxieyusheng/)

##一：基础配置  
1.Homebrew ：类似于app store的软件商店   brew  -v 查看版本  
2. node  node -v  
3. watchman  watchman -v  
这里主要是参考中文网的文档

##二：推荐文档教程
1. [通过一个ios项目来解析](http://www.oschina.net/translate/going-native-with-react)  
2. [江青青博客 ](http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native-for-android%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%BB%A5%E5%8F%8A%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%AE%9E%E4%BE%8B/ ) 

##三：核心知识点
1:props  
2:state  
3:ref  
4:navigator  
5:fetch  
6:redux  
###1:props（组建属性：子组件获取父组件信息）
在一个组建中，我们可以将其看做是一个类，所以，我们这个类需要有自己属性props，那么
这个属性是怎么来的呢？具体的有如下几种方式获取！  
1. 在组建自己定义
```js
static defaultprops={
name:"xieyusheng",
age: 18,
}
```
2.从父组建传递过来的 
```js
<Father>
<Child name="xieyusheng">
</Father>
在Child中通过 this.props.name从而获得
```
3.从redux中获得(暂缺)

###注释：
1:在一些情况下，我们需要去设定属性的类型，比如名字是String，年纪是num类型
```js
static propType={
name:propType.string
当必须传递属性，（不建议）
name:propType.String.isrequird,
}
```
2:props传值方式 ，从父组建中传递值给子组建
```js
<Child name="xieyusheng"> 单个
<Child name={Person.name}>  对象的属性 单
<Child name={Person}> 传递对象 取出的是this.props.Person.xxx
<Child {...Person}/> 传递对象 取出的是this.props.xxx
```

###2:ref（父组件获取子组件）
```js
<Father>
<Child ref="child">
</Father>
那么在父组件中我们就可以通过this.refs.child来获取子组件，其属性/方法 this.refs.child.xxx
```
###3:navigator（路由栈）
###4:state（组件状态）
###5:fetch（网络请求）



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

#关于scrollView的滚动相关  
```js 
//水平滚动 默认是向下的
horizontal = {true}
//隐藏滚动条
showsHorizontalScrollIndicator={false}
```
#布局相关  
```js 
<View style={{flex:1,}}> //首先定义整个的页面是弹性盒子模型
<Mind/>
<View style={{position:'absolute',left:20,bottom:0}}><Text>sddcdsfdsfsds</Text></View> //  这样就可以让子元素（项目使用基本的布局方式）
</View>
```

