/*demo2 主要是先介绍一个重要的组件VIew，从这个组件可以衍生出其他的组件（ListView、ScrollView组件等）
* demo1 说到时返回的组件只能有一个顶层组件包裹着~这是因为，我们的js文件都是从本地的服务器loca8081拉下来的
*也就是说，如果我们APp上线，只需要将服务器地址改下就可以了，
这个文件主要是在IOS里面的xxx.m文件里面，里面设置了一个rootView 也就是说我们的顶层View转化成了rootView，所以只许有一个。
*/
import React, { Component } from 'react'; //这个Demo介绍过了
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
class demo2 extends Component{
  render(){
    return(
      <View style={styles.container}>  //这里主要是引入样式。是每个组价的一个属性style、、有两种方式，1，style={{flex：1，backgroundColor}}
                                      // 直在组件里面写样式，style={sytles.container};主要是在下面定义后，上面引入；注意：遇到js则{}包裹
        <Text>周杰伦</Text>
      </View>
    )
  }
}
var styles=StyleSheet.create({
  container:{                    //这里设置的是View的样式，RN默认是flexBox弹性盒模型布局，所以，demo3我们在详细介绍
    flex:1,                      //弹性额沾满空余空间
    justifyContent:'center',    //主轴居中
    alignItems:'center',        //副轴居中
    backgroundColor:'pink'     //背景色
  }
})
AppRegistry.registerComponent('Book', () => demo2);