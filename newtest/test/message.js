//react-native-message-bar 第三租组件的使用
//github: https://github.com/KBLNY/react-native-message-bar
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
 var MessageBarAlert = require('react-native-message-bar').MessageBar;
 var MessageBarManager = require('react-native-message-bar').MessageBarManager
class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {

 }
}

componentDidMount() {
  // Register the alert located on this master page
  // This MessageBar will be accessible from the current (same) component, and from its child component
  // The MessageBar is then declared only once, in your main component.
  MessageBarManager.registerMessageBar(this.refs.alert);
}

componentWillUnmount() {
  // Remove the alert located on this master page from the manager
  MessageBarManager.unregisterMessageBar();
}
test(){
  MessageBarManager.showAlert({

  title: "John Doe", // Title of the alert
  message: "Hello, any suggestions?", // Message of the alert
  alertType: 'info',
  /* Number of Lines for Title and Message */
  titleNumberOfLines: 1,
  messageNumberOfLines: 0, // Unlimited number of lines
  position: 'bottom',
  animationType: 'SlideFromLeft',


});
}

  render(){
    return(
      <View>
          <View style={{height:60,backgroundColor:'#444444'}}></View>
           <Text onPress={this.test.bind(this)}>message</Text>
           <MessageBarAlert ref="alert" />
      </View>
    )
  }

}

export default Home;
