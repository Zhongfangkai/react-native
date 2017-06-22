//第三方组件 picker
import React, { Component } from 'react';
 import {
Animated,
Easing,
View,
StyleSheet,
Text,
TouchableOpacity
 } from 'react-native';
import Picker from 'react-native-picker';
import tools from './tools';
var time=new Date().getFullYear();
class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
  // realHtTime: "", //实际过户时间
  realHtTimeName:"",
 }
}
//实际过户时间点击事件
chooseTransferDate(){
  Picker.init({
    pickerData: tools.createDateData(time,2050),
    pickerTitleText: "选择实际过户时间",
    pickerConfirmBtnText: '确定',
    pickerCancelBtnText: '取消',
    selectedValue:[`${this.state.realHtTimeName.split('-')[0]}`,`${this.state.realHtTimeName.split('-')[1]}`,`${this.state.realHtTimeName.split('-')[2]}`],
    onPickerConfirm: data => {
      this.setState({
        realHtTimeName:`${data[0]}-${data[1]}-${data[2]}`,
      });
    },
    onPickerCancel: data => {
    },
    onPickerSelect: data => {
    }
  });
  Picker.show();
}
componentDidMount(){
  let date = new Date();
  let year=date.getFullYear();
  let month=date.getMonth()+1;
  let day=date.getDate();
  if(month < 10){
    month='0'+month
  }
  if(day<10){
    day='0'+day
  }
  this.setState({
    realHtTimeName:`${year}-${month}-${day}`,
  });
}
componentWillUnmount(){
  Picker.hide();
  ImageCropPicker.clean().then(() => {
  }).catch(e => {
    alert(e);
  });
}
  render(){
    return(
      <View>
          <Text>aaa</Text>
          <TouchableOpacity style={{flexDirection:'row',height:44,alignItems:'center',backgroundColor:'white'}}
                  onPress={this.chooseTransferDate.bind(this)}>
                <Text style={{marginLeft:15}}>实际过户时间</Text>
                <Text style={{textAlign: 'right',marginRight:15,flex:1,color:'black',fontSize:14}}>{this.state.realHtTimeName}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{alert(this.state.realHtTimeName)}}>
                      <Text>aa</Text>
              </TouchableOpacity>
      </View>
    )
  }

}

export default Home;
