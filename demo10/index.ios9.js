
/*listView组件，一般用于展示结构相同，但是数据不同的组件，列表页多晒用,具体是组件的不断的加载显示*/
/*主要思路：首先在初始化通过ListView.DataSource创建new一个数据源，然后给这个数据源一个json数据，最后通过renderRow进行结构和数据的绑定渲染*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
var jo= [                //这里定义了一个json数,中括号里面都是一个一个组件（对象）的数据
        {
          "title":"开放式办公位706",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"开放式工位详情",
          "type":"station",
          "imgurl":require('./img/lang.png')

        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"独立办公位502",
          "type":"station",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },{
          "title":"适合董事会议或视频会议",
          "type":"meeting",
          "imgurl":require('./img/lang.png')
        },
      ]

class yy extends Component{
  constructor(props) {
    super(props);  //初始化状态下创建一个数据源，并且添加了当数据源改变的时候的更新条件（state改变更新）
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = {
      dataSource: ds.cloneWithRows(jo),  //给这个数据源一个json数据
    };
  }
  render() {
    return (
      <ListView
        initialListSize={4}//初始化渲染多少个
        dataSource={this.state.dataSource} //引入数据源 
        renderRow={this.xuanran}  //返回渲染具体的item，这个函数有四个参数，最重要是rowData（一条数据）。注意 ：这里会一个一个全部渲染
      />
    );
  }
  xuanran(rowData){       //返回函数，参数是RowData默认
    console.log(rowData)
    return(              //通过样式和数据绑定
      <View style={styles.con}>
        <Image source={rowData.imgurl} style={{width:90,height:90}}/>
        <Text>{rowData.title}</Text>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  con:{
    height:90,
    backgroundColor:'red',
    marginTop:5,
  }
})

