import React, { Component } from 'react';
import { Text,  View ,Dimensions,Image,StyleSheet} from 'react-native';

import TabBar from './TabBar';
import TabGroup from './TabGroup';

class Home extends Component {
  _content(){
    return(
      <View>
        <Text>00000000000</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1}}>
          <View style={{height:40,width:Dimensions.get('window').width ,backgroundColor:'red',position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-between'}}>
              <View>
              <Image source={require('./c.png')} style={styles.icon}/>
                <Text>one</Text>
              </View>
              <View>
              <Image source={require('./c.png')} style={styles.icon}/>
                <Text>one</Text>
              </View>
              <View >
                <View style={{position:"absolute",width:50,height:90,backgroundColor:'blue',bottom:0,left:10}}>
                    <Image source={require('./c.png')} style={styles.icon}/>
                </View>
              </View>
              <View>
              <Image source={require('./c.png')} style={styles.icon}/>
                <Text>one</Text>
              </View>
              <View>
              <Image source={require('./c.png')} style={styles.icon}/>
                <Text>one</Text>
              </View>
          </View>
      </View>
    );
  }
}
let styles=StyleSheet.create({
  icon:{
    width:20,
    height:20
  },
  center:{
    width:30,
    height:30
  }
})
export default Home;
