/*关于组建TouchableHighlight和组建TouchableOpacity*/
/*以及初步事件（相当于js里面的click）等和状态机的初步*/
import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity
} from 'react-native';
/*一般情况下，当我们要使得一个组建有事件的时候就会给他套上个封装视图组建*/
//在RN中事件一般有点击（触摸）onPress、onPressIn(按下)、onPressOut、onPressOut等
//ES5和ES6的初始化方法比较（一般情况下，用哪种组件定义版本，就用哪种初始化版本，否则会警告）
/*在ES5中：getInitialState: function() {
    return {liked: false};
    }
    而在ES6中：
    constructor(props) {
    super(props);
    this.state = {liked: false};
  }
*/
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
      <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.change()}}>//当点击的时候，发生事件函数
        <Text>点击我喽</Text>
        <Text>{this.state.title}</Text>  //  当前状态的显示数据
      </TouchableOpacity>
      </View>
    )
  }
  change(){
    this.setState({
      title:"哈哈，我变了哈"  //setState()函数是用来改变状态的，这个函数应该和render（）一样，来自于Component这个大BOSS组件
    })
  }
}



AppRegistry.registerComponent('Book', () => Web);
