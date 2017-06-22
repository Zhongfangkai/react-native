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
import  ImagePicker from 'react-native-image-picker'; //第三方相机
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
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
cameraAction = () =>{
  console.log(1);
  ImagePicker.showImagePicker(photoOptions, (response) => {
    //这里注意的是不要用下面的+拼接
  // console.log('response'+response);
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };
      // let source={require(response.uri)}
    this.setState({
      avatarSource: source
    });
  }
});

    }
//网络监听
componentDidMount() {

}
//移除监听
componentWillUnmount() {

}
big(){
  this.setState({
    width:500,
    height:500,
  })
}
  render(){
    return(
      <View style={{marginTop:200}}>
           <Text onPress={this.cameraAction.bind(this)}>aaa</Text>
           <TouchableOpacity onPress={this.big.bind(this)}>
             <Image source={this.state.avatarSource} style={{width:this.state.width,height:this.state.height}}/>
           </TouchableOpacity>
      </View>
    )
  }

}

export default Home;
