//UI 框架 https://react-native-training.github.io/react-native-elements/
import React, { Component } from 'react';
 import {
Animated,
Easing,
View,
StyleSheet,
Text,
TouchableOpacity,
Image,
ListView,
ScrollView
 } from 'react-native';
import {SearchBar,Rating,PricingCard,Icon,Header, Button ,List, ListItem,Avatar,Badge,CheckBox,Divider,FormLabel, FormInput,FormValidationMessage} from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    checked:true
 }
}
renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
}
//网络监听
componentDidMount() {

}
//移除监听
componentWillUnmount() {

}

  render(){
    return(
      <ScrollView>
           <Button
              raised
              icon={{name: 'home', size: 32}}
              buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
              textStyle={{textAlign: 'center'}}
              title={`Welcome to\nReact Native Elements`}
            />
            <Avatar
              small
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              />
              <Badge
                  value={3}
                  textStyle={{ color: 'orange' }}
                />
                <CheckBox
                  title='Click Here'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Click Here'
                  checked={false}
                />

                <Divider style={{ backgroundColor: 'red' }} />

                <FormLabel>Name</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage>


                <Icon
                  name='rowing'
                  color='red'
                  />
                  <PricingCard
                      color='#4f9deb'
                      title='Free'
                      price='$0'
                      info={['1 User', 'Basic Support', 'All Core Features']}
                      button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    />
                    <Rating
                      showRating
                      type="star"
                      fractions={1}
                      startingValue={3}
                      readonly
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      style={{ paddingVertical: 10 }}
                    />
                    <SearchBar
                          round
                          containerStyle={{backgroundColor:'red'}}
                          placeholder='Type Here...' />
      </ScrollView>
    )
  }

}

export default Home;
