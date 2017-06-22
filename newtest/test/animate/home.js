//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Dimensions,
//   Image,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ListView,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// var {height, width} = Dimensions.get('window');
//
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//
//     }
//   }
//
//   render() {
//     return (
//         <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
//             <View style={{marginTop:100}}>
//             <Animatable.Text animation="zoomInUp" iterationCount={1} direction="normal">
//                 <View style={{width:30,height:30,backgroundColor:'red'}}></View>
//             </Animatable.Text>
//             </View>
//         </View>
//     );
//   }
// }
// export default Home;
// var React = require('react-native');
// var {
//     Animated,
//     Easing,
//     View,
//     StyleSheet,
//     Text
// } = React;
 import React, { Component } from 'react';
 import {
Animated,
Easing,
View,
StyleSheet,
Text
 } from 'react-native';
var Home = React.createClass({
    getInitialState() {
        return {
            fadeInOpacity: new Animated.Value(0) // 初始值
        };
    },
    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1, // 目标值
            duration: 2500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
    },
    render() {
        return (
            <Animated.View style={[styles.demo, {
                    opacity: this.state.fadeInOpacity
                }]}>
                <Text style={styles.text}>悄悄的，我出现了</Text>
            </Animated.View>
        );
    }
});

var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});
export default Home;
