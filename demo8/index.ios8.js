// 组件的什么周期
import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity
} from 'react-native';
class Web extends Component{
  constructor(props){
    super(props);
    this.state={
      title:' Now you see me '
    }
  }

  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.change()}}>
        <Text>点击我喽</Text>
        <Text>{this.state.title}</Text>  
      </TouchableOpacity>
      </View>
    )
  }
 
/*在RN中，组件类有其生命周期，所谓生命周期就是一个组件的创建到销毁坏的全部过程，其中主要分为三大块1、创建实例、2、存在状态 3、销毁
  这些在百度上都有图纸的，这里主要阐述的是日常开发所经常用到的过程（函数）ES5写法
 1. getDefaultProps（）{
      return（{
          title:'xieyushneg'；   -----当一个组件刚开始创建的时候，这个函数主要存放的是固定的常量。用this.props.title获取、不可变！
      }）
  }
 2.getInitialState(){
  return({
    title:'allen'                ----创建过程的第二个函数，主要是存放变化的量，用this.state.title获取，并且用函数setState（{title:'aaa'}）来改变，然后重新被render（）渲染
  })
 }
 3.render（）{
  return(
      <View>
        <Text>{this.state.title}</Text>  ------  组件的渲染  ，当state改变的时候，重新渲染 
        <Text>{this.props.title}</Text>
      </View>
  )
 }
 4.componentDidMount(){
  xxxxx                           ------当组件渲染完毕后，开始实现一些例如加载啊，数据请求啊，等操作
 }
 注释：当我们要获取真实的DOM的节点，那么我们可以像Html那样给组件加上ID , 但是这次用到的是ref这个属性
 <View ref="aaa">  获取：this.refs.aaa
*/

AppRegistry.registerComponent('Book', () => Web);
