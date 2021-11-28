import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
let { height, width } = Dimensions.get('window')





class App extends React.Component {
    componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    },5000);
}
  render() {

    return (
      <>
      <LinearGradient colors={['#265d0c', '#265d0c']} style={styles.linearGradient}>
            <View style={{borderRadius:height*0.5 , flex: 1, backgroundColor:'#265d0c',
   justifyContent :'center',
   alignItems:'center',}}>
                    <Image
                        source={require('../Assets/salahh.png')}
                        style={{ width: '100%', height: '45%', }} resizeMode='contain'

                    />
                     {/* <Text style={{alignItems:'center', justifyContent:'center' , fontSize:20, color:'#EAEEEA' , fontWeight:'bold', marginTop:-40}}>Prayer's Time</Text> */}
                    </View>
                   
                    <Text style={{ color:'green',justifyContent:'flex-end' , alignItems:'flex-end' , textAlign:'center' ,padding:12, backgroundColor:'white' , fontSize:16, fontWeight:'bold'}}>www.digitizevolition.com </Text>
 
  
</LinearGradient>
      
        
       
       
        
      </>
    );
  }
};
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
   
   
    
 
  },
})

export default App;
