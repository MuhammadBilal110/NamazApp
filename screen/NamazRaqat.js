import React, { Component } from 'react'
import { Text, FlatList, View, StyleSheet, BackHandler ,Linking, Modal, Dimensions, Image , TouchableOpacity } from 'react-native';
import NamazTariqa from './NamazTariq'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Drawer from 'react-native-drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Drawers from '../screen/drawer'
let { height, width } = Dimensions.get('window')
class Namaz extends Component {
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



  render() {


    console.log('this.props of NamazRaqat', this.props)

    return (


      <>
          <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                acceptPan={true}
                content={
                
                  < Drawers navigateFunc={this.navigateFunc} currentScreen={'Namaz Tariqa'} closeDrawer={this.closeDrawer} />

                    
                }
                openDrawerOffset={0.25} // 20% gap on the right side of drawer
                type="overlay"
            >
                <View style={{ flex: 1 }}>
                    <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.openDrawer()} style={{marginLeft:10}}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                       
                       <Text style={{ color:'#fff', marginLeft: width*0.24, fontSize:20 ,fontWeight:'bold'}}>Namaz Steps</Text>
                       <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 80 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

                    </View>
        <NamazTariqa
          navigateFunc={this.navigateFunc}

        />
        </View>
        </Drawer>

      </>




    )
  }
}

export default Namaz



