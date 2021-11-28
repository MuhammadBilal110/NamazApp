import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,  Button, Share,Linking, Modal, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Wazuu from './Wazuu'

// let firstImage
// let secondImage
// let thirdImage
let { height, width } = Dimensions.get('window')


export default class NamazTariqa extends Component {

  
  state = {
    index: 0,
   
  }

  render() {
 
   
    console.log('this.props.navigation.navigate', this.props)
    return (
      <>

        <View style={styles.container}>

          <Image
            source={require('../Assets/Namazmad.jpg')}
            style={{ width: '100%', height: '35%', }}


          />
          {/* <ImageSlider
            loopBothSides
            autoPlayWithInterval={10000}

            images={[
              require("../Assets/ta.jpg"),
              require("../Assets/tc.jpg"),
              require("../Assets/tb.jpg"),
              require("../Assets/t2a.jpg"),
              require("../Assets/t2b.jpg"),
              require("../Assets/t3a.jpg"),
              require("../Assets/t3b.jpg"),
              require("../Assets/t4a.jpg"),
              require("../Assets/t5a.jpg"),
              require("../Assets/t5b.jpg"),
              require("../Assets/t5c.jpg"),
              require("../Assets/t6a.jpg"),
              require("../Assets/t6b.jpg"),
              require("../Assets/t8a.jpg"),
              require("../Assets/t8b.jpg"),
              require("../Assets/t8c.jpg"),
              require("../Assets/t9.jpg"),
              require("../Assets/t9.jpg"),

            ]

            }
            onPositionChanged={(index) => {

              this.setState({ index })
            }}

            onPress={({ index }) => alert(index)}


            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={item} style={styles.customImage} />
                {/* <Text key={index[0]}>Step 1</Text> */}

              {/* </View> */}
            {/* )}




          /> */}
          
          <View style={{flexDirection :'row' }}>
            <TouchableOpacity  onPress={() => this.props.navigateFunc('MPrayer')}
              style={{ borderWidth: 1,  borderColor: " #cccccc", borderRadius: 10, width: "40%" , height: '50%',   padding: '8%', margin: '5%', marginTop: '20%' }} >
                 <Image source={require('../Assets/abc.jpg' )}
                style={{   marginTop: '10%', height: '100%'  , width : '150%'     , marginLeft:-20}}/>
                <Text style={{ fontSize: 25 , textAlign: 'center', color: 'green' , fontWeight:'bold', marginTop:20 }}> Male
                   </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigateFunc('Female')}
              style={{ borderWidth: 1, borderColor: " #cccccc", borderRadius: 10, width: "40%" , height: '50%',   padding: '8%', margin: '5%', marginTop: '20%' }} >
               <Image source={require('../Assets/ficon.jpg' )}
                style={{   marginTop: '10%', height: '100%'  , width : '150%'   , marginLeft:-20  }} />
              
              <Text style={{ fontSize: 25, textAlign: 'center', color: 'green',fontWeight:'bold' , marginTop:20 , marginRight:-15}}> Fe Male 
                   </Text>
            </TouchableOpacity>
            
            
          </View>
          
        </View>


      

      </>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },


  customSlide: {
    backgroundColor: 'white',

  },
  customImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    padding: '40%',



  },

})


//         <View style={{
//             flex:1,
//             padding:50,

//             backgroundColor: "#f4f4f4",
//             alignItems:"center"
//         }}>




