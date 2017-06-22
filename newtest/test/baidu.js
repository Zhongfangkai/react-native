/*获取第三方网站的数据*/
//第三方组件 picker
import React, { Component } from 'react';
 import {
Animated,
Easing,
View,
StyleSheet,
Text,
TouchableOpacity,
Image
 } from 'react-native';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
   History:"",
   avatarSource:null,
   width:200,
   height:200,
 }
}

//网络监听
componentDidMount() {
  
}
//移除监听
componentWillUnmount() {

}

  render(){
    return(
      <View style={{marginTop:200}}>
           <Text>百度</Text>
      </View>
    )
  }

}

export default Home;
