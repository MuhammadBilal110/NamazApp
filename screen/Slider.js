import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  View,
  Text,
  StatusBar,
  ImageBackground,
 
} from 'react-native';
import ImageSlider from 'react-native-image-slider';


const Slider=()=>{
  
    return(
        <View style={styles.container}>
        
        <ImageSlider
           loopBothSides
          autoPlayWithInterval={2000}
         
          images={[
            require("../Assets/1.jpg"),
            require("../Assets/2.jpg"),
            require("../Assets/3.jpg"),
          ] 
        }
          onPress={({ index }) => alert(index)}
          
          
          customSlide={({ index, item, style, width }) => (
             // It's important to put style here because it's got offset inside
         <View key={index} style={[style, styles.customSlide]}>
               <Image source={item} style={styles.customImage} />
              </View>
         )}

         
        
       
        />
        
      </View>
    );

    

}
const styles = StyleSheet.create({
    container: {
        flex: 0,
       
      },
      
    
      
     
      customSlide: {
       backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      customImage: {
        width: '95%',
        height: '60%',
        borderRadius : 50/2,
        opacity : 5,
        top : '-10%',
       
      },
  });
  
export default  Slider