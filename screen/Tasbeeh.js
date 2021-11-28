import React, { Component } from 'react'
import { Text, FlatList, View, StyleSheet, BackHandler , Modal, Image , Dimensions , TouchableOpacity } from 'react-native';
import TasbeehCounter from './TasbeehCount'
import Drawer from 'react-native-drawer'
let { height, width } = Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Drawers from '../screen/drawer'


class Tasbeeh extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modalVisible: false,
        showmodal:false
    }
}

  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction , 
     
    );
  }
  


  backAction = () => {
    this.props.navigation.navigate('Home')
    return true
  }
  navigateFunc = (navigateTo, zikar, countTill, CountC) => {

    this.props.navigation.navigate(navigateTo, { zikar, countTill, CountC })
  }
  closeDrawer = () => {
    this._drawer.close()
};
openDrawer = () => {
    this._drawer.open()
};


  render() {


    

    return (


      <>
   
     
      <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                acceptPan={true}
                content={
                
                  < Drawers navigateFunc={this.navigateFunc} currentScreen={'Tasbeeh'} closeDrawer={this.closeDrawer} />

                    
                    
                }
                openDrawerOffset={0.25} // 20% gap on the right side of drawer
                type="overlay"
            >
                <View style={{ flex: 1 }}>
                    <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.openDrawer()} style={{marginLeft:10}}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                        <Text style={{ color:'#fff', marginLeft: width*0.22 , fontSize:20 ,fontWeight:'bold'}}>Tasbeeh Counter</Text>
                        <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: '18%' }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

                    </View>
                </View>

        <TasbeehCounter
          navigateFunc={this.navigateFunc} />
          </Drawer>
 

      </>
     




    )
  }
}

export default Tasbeeh



