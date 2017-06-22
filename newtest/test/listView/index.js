
import React, { Component } from 'react';
import { AppRegistry,ActivityIndicator, ListView, Text, View ,RefreshControl} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      isRefreshing:false,
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel',
      ])
    };
  }
  renderItem(row){
     return(
       <View style={{height:30,backgroundColor:'red',marginTop:10,}}>
          <Text>{row}</Text>
       </View>
     )
  }
  //下拉刷新
  _onRefresh(){
    console.log("刷新......");
  }
  //出现loading或者更多
  footer(){
    //如果没数据了，就显示没有更多的数据了，否则是loading
    return(
      <ActivityIndicator/>
    )
  }
  //封装list请求
  _feachData(page){
    this.state({
      isLoading:true
    })
    request.get()
    .then(data)=>{
      if(data.succeed){
        var items=nowDate.items.slice()
        items=items.concat(data.data);
        nowDate.items=items;
        nowDate.total=data.total;
        this.setState({
          isLoading:false,
          dataSoucer:this.state.dataSouce.clone(nowData.items)
        })
      }
    }
  }
  //加载更多数据
  more(){
      console.log("更多数据");
  }
  render() {
    return (
      <View style={{marginTop:30}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}
          onEndReaced={this.more}
          onEndReachedThreshold={10}
          renderFooter={this.footer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor="#ff0000"
              title="正在加载中..."
              titleColor="#00ff00"
            />
          }
        />
      </View>
    )
  }
}


export default  List;
