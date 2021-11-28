import React, { Component } from 'react'
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput, Paragraph, Button } from 'react-native-paper';
import Drawers from '../screen/drawer'




import Drawer from 'react-native-drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
let { height, width } = Dimensions.get('window')
class Privacy extends Component {


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
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };
    navigateFunc = (navigateTo) => {

        this.props.navigation.navigate(navigateTo)
    }
    render() {

        return (
            <>

<Drawer
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          acceptPan={true}
          content={
            < Drawers navigateFunc={this.navigateFunc} currentScreen={'Qibla'} closeDrawer={this.closeDrawer}/>

              
              
          }
          openDrawerOffset={0.25} // 20% gap on the right side of drawer
          type="overlay"
      >
              <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.openDrawer()} style={{marginLeft:10}}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                  <Text style={{ color:'#fff', marginLeft: width*0.24 , fontSize:20 ,fontWeight:'bold'}}>Privacy Policy</Text>
                  <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 80 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

              </View>
                    
                   <View style={{margin:15}}>
                    <Text style={{marginTop:'10%'  ,fontSize:18 ,  margin:10, alignContent:'center' , textAlign:'left'  , margin:'4%' ,  }}>
                     
                        Salah  application will access
your Gps Location as well as Internet
to find your accurate coordinates,
also this application has the feature
of Current Namaz  Times and Faraz Namaz Tariq Of Male And Female 
also Have More feactures of Eid namaz and janaza Namaz And Have Feature od Supplication Where you can read and remeber easily 
. So the app needs
the Location Permission, Internet
Connectivity, Camera permission
and Storage permission to perform
these tasks. If you want app works
smoothly without any problems you
should allow these permissions to
our app. We Guaranteed that this app
does not stealing User's personal
data in any case. Thank You.
For More Details Check Our Privacy Policy

</Text></View>
        </Drawer>
                  

         


            </>
        )
    }
}

const theme = {
    colors: { primary: 'green' ,  },
    
    
}
const styles = StyleSheet.create({
    style:{
        fontWeight:'bold'
    },
    buttonContentStyle:{
        fontSize:50
    }
})

export default Privacy