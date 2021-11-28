import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button, Dimensions, Card, BackHandler } from 'react-native';
import Namaz from './EidNamaz'
import Drawer from 'react-native-drawer'
import Drawers from '../screen/drawer'
import Entypo from 'react-native-vector-icons/Entypo'

let { height, width } = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


class More extends Component {
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  navigateFunc = (navigateTo) => {
    console.log('this.props', this.props)
    this.props.navigateFunc(navigateTo)
    // this.props.navigation.navigate(navigateTo)
  }

  render() {
    return (

      <View style={styles.container}>
        <Drawer
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          acceptPan={true}
          content={
            < Drawers navigateFunc={this.navigateFunc} currentScreen={'More'} closeDrawer={this.closeDrawer} />



          }
          openDrawerOffset={0.25} // 20% gap on the right side of drawer
          type="overlay"
        >
          <View >
            <View style={{ height: height * 0.08, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
              <Text style={{ color: '#fff', marginLeft: width * 0.3, fontSize: 20, fontWeight: 'bold' }}>More</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginLeft: 120 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

            </View>
          </View>
          <View >

            <Image
              source={require('../Assets/Masj.jpg')}
              style={{ width: width, height: height * 0.28, }}


            /></View>


          <View style={{ flexDirection: 'row', marginTop: '-1%' }}>
            <TouchableOpacity onPress={() => this.props.navigateFunc('Duaen')}
              style={{ backgroundColor: '#6ACA6B', borderWidth: 1, borderColor: " #cccccc", width: "40%", height: '40%', padding: '8%', margin: '6%',marginTop:'10%'   , marginRight: '-0%'}} >

              <Image source={require('../Assets/duaaa.jpg')}
                style={{ marginTop: '0%', height: '120%', width: '150%', marginTop: -25, marginLeft: -20, marginRight: 30, resizeMode: 'contain' }} />
              <Text style={{ FontSize: 35, textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 10 }}> Supplication
                   </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigateFunc('Wazuu')}
              style={{ backgroundColor: '#6ACA6B', borderWidth: 1, borderColor: " #cccccc", width: "40%", height: '40%', padding: '8%', margin: '6%', marginTop:'10%' }} >

              <Image source={require('../Assets/wazu.jpg')}
                style={{ marginTop: '0%', height: '120%', width: '150%', marginTop: -25, marginLeft: -20, marginRight: 30, resizeMode: 'contain' }} />
              <Text style={{ FontSize: 35, textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 10 }}> Ablustion
                   </Text>
            </TouchableOpacity>




          </View>
          <View style={{ flexDirection: 'row', marginTop: '-45%' }}>
            <TouchableOpacity onPress={() => this.props.navigateFunc('EidNamaz')}
              style={{ backgroundColor: '#6ACA6B', borderWidth: 1, borderColor: " #cccccc", width: "40%", height: '40%', padding: '8%', margin: '6%', marginTop: '1%' , marginRight: '-0%'}} >

              <Image source={require('../Assets/eidii.png')}
                style={{ marginTop: '0%', height: '120%', width: '150%', marginTop: -25, marginLeft: -20, marginRight: 30, resizeMode: 'contain' }} />
              <Text style={{ FontSize: 35, textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 10 }}>  Namaz  Eid
                   </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigateFunc('JNamaz')}
              style={{ backgroundColor: '#6ACA6B', borderWidth: 1, borderColor: " #cccccc", width: "40%", height: '40%', padding: '8%', margin: '6%', marginTop: '1%' ,  }} >

              <Image source={require('../Assets/janazaa.png')}
                style={{ marginTop: '0%', height: '110%', width: '150%', marginTop: -22, marginLeft: -20, marginRight: 10, resizeMode: 'contain' }} />
              <Text style={{ FontSize: 30, textAlign: 'center', color: 'black', fontWeight: 'bold', width: 100, marginTop: 16 }}>Janaza Namaz
                   </Text>
            </TouchableOpacity>




          </View>
        </Drawer>


      </View>


    )
  }





}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }


})
export default More