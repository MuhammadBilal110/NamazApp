import React, { Component } from 'react'
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity } from 'react-native'
import More from './More'
import Drawer from 'react-native-drawer'
import Drawers from '../screen/drawer'

import Entypo from 'react-native-vector-icons/Entypo'

let { height, width } = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MoreItem extends Component {


  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  handleBackPress = () => {

    this.props.navigation.navigate('Home')

    return true
}
  backAction = () => {
    this.props.navigation.navigate('Home')
    return true
  }
  navigateFunc = (navigateTo) => {
    console.log('navigateTo', navigateTo)
    if (navigateTo == 'Wazuu') {
      this.props.navigation.navigate(navigateTo, { screenn: 'More' })
    } else {
      this.props.navigation.navigate(navigateTo)
    }
  }
  render() {
   
    return (
      <>

       
          <More
            navigateFunc={this.navigateFunc}
          />
       
      </>
    )
  }
}

export default MoreItem