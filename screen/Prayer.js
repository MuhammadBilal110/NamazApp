import React, { Component } from 'react'
import { Text, FlatList, View, StyleSheet, Image, Linking, Modal, BackHandler, Dimensions, TouchableOpacity } from 'react-native';
import PrayerTime from './PrayerTime'
import Drawer from 'react-native-drawer'
let { height, width } = Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Drawers from '../screen/drawer'

class Prayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }
  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  backAction = () => {
    this.props.navigation.navigate('Home')
    return true
  }

  navigateFunc = (navigateTo) => {

    this.props.navigation.navigate(navigateTo)
  }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  onShare = async () => {


    try {
      const result = await Share.share({
        message:
          'Salah App  AppLink:https://bit.ly/37VK5xh  ',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {


    return (


      <>
        <Drawer
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          acceptPan={true}
          content={
            < Drawers navigateFunc={this.navigateFunc} currentScreen={'Prayer'} closeDrawer={this.closeDrawer} />


          }
          openDrawerOffset={0.25} // 20% gap on the right side of drawer
          type="overlay"
        >
          <View style={{ flex: 1 }}>
            <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
              <Text style={{ color: '#fff', marginLeft: width * 0.26, fontSize: 20, fontWeight: 'bold' }}>Prayer's Time</Text>
              <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 80 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

            </View>

            <PrayerTime
              navigateFunc={this.navigateFunc}
            />
          </View>
        </Drawer>


      </>




    )
  }
}

export default Prayer



