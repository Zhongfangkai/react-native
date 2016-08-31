
/*封装控件？为什么要？因为我们要想Image一样的给控件传入参数：比如<Image source={}这样，图片这个参数可以传入图片控件内
我们这里以封装控件MenuButton为例子解析：
首先，我们新建一个控件js  MenuButton.js
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import MenuButton from './MenuButton'; //可以外部引入，也可以在本js内写
class yy extends  Component{
    render(){
      return(
        <View> //这样的话，我们这个控件就可以接受像图片那样接受自定义的属性（和方法）了！ 
            <MenuButton title="oooooo"  renderIcon={require('./img/lang.png')}/>
        </View>
      )
    }
}

AppRegistry.registerComponent('Book', () => yy );
