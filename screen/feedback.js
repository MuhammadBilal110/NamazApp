import React, { Component } from 'react'
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity } from 'react-native'
import { TextInput, Paragraph, Button } from 'react-native-paper';


import Drawer from 'react-native-drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
let { height, width } = Dimensions.get('window')
class Feedback extends Component {


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
          <View style={{backgroundColor:'white', height:height}}>
                <LinearGradient colors={['#265d0c', '#265d0c']} >
              <View style={{ height:height*0.3 ,alignItems:'center' , justifyContent:'center'}}>
                  
                  <Image 
                   source={require('../Assets/salah.png')}
                   style={{ width: width*0.5, height: height*0.15,   }} resizeMode='contain'
                  
                  
                  />
                  </View>
                  </LinearGradient>
          
                  
                 

                  <TouchableOpacity onPress={() => this.navigateFunc('About')}  style={{flexDirection:'row' , marginLeft:20 , marginTop:20 }}>  
                        <Ionicons name={'person'} size={25} color={'black'}  /><Text style={{ height:height*0.07 , marginLeft:20, marginTop:4 , fontSize:17}}>About Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateFunc('Contact')}  style={{flexDirection:'row' , marginLeft:20 }}><MaterialIcons name={'quick-contacts-mail'} size={25} color={'black'}  /><Text style={{ height:height*0.07 , marginLeft:20,  fontSize:17}}>Contact Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateFunc('')}  style={{flexDirection:'row' , marginLeft:20 }}><MaterialIcons name={'feedback'} size={25} color={'black'}  /><Text style={{ height:height*0.07 , marginLeft:20,  fontSize:17}}>Feed Back</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateFunc('Privacy')}  style={{flexDirection:'row' , marginLeft:20 }}><MaterialIcons name={'privacy-tip'} size={25} color={'black'}  /><Text style={{ height:height*0.07 , marginLeft:20,  fontSize:17}}>Privacy Policy</Text></TouchableOpacity>

              </View>
              
              
          }
          openDrawerOffset={0.25} // 20% gap on the right side of drawer
          type="overlay"
      >
              <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.openDrawer()} style={{marginLeft:10}}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                  <Text style={{ color:'#fff', marginLeft: width*0.25 , fontSize:20 ,fontWeight:'bold'}}>Feedback</Text>
              </View>
             
               <TextInput
                        label="Name"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                        style={{width:width}}
                     



                    />
                    <TextInput
                        label="Email"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                    

                    />
                    <TextInput
                        label="Message"
                        multiline={true}
                        numberOfLines={6}
                        selectionColor="green"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                     
                        
                    />
                   <TouchableOpacity >
                    <Text 
                    style={{marginTop:16 , fontSize:20 , backgroundColor:'green' , color:'white' , textAlign:'center'}}>
                        Submit
                    </Text>
                    </TouchableOpacity>
                 
                  
             
              
              </Drawer>
        

             


            </>
        )
    }
}

const theme = {
    colors: { primary: 'green' ,  }
    
}

export default Feedback


