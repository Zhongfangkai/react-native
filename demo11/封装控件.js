import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Touchableopacity,
} from 'react-native';

export default class MenuButton extends Component{
  render(){
    return(
      <View>
          <Image style={styles.iconImg} source={this.props.renderIcon}/>
          <Text>{this.props.title}</Text> //我们在这里定义的this.props.xxx会传入实例化的具体值
      </View>
    )
  }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    }
});
