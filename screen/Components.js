import React, { Component } from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity , Button } from 'react-native';
import { Card } from 'react-native-paper';

let { height, width } = Dimensions.get('window')

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:'column',   marginTop : 40}}>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>


        <TouchableOpacity onPress={() => this.props.navigateFunc('AllahNames')} style={{ width: '30%', }}>
       
        <Image
           
             source={require('../Assets/Allah.jpg')}
             style={{ width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '25%' }}
 
       
          />
        
          <Text style={{  marginLeft: '5%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" ,  textAlign:'center' }}>99    Names</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigateFunc('Namaz')} style={{ width: '30%', }}>
          <Image
            source={require('../Assets/namaz.png')}
            style={{ width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '23%' }}

          />
          <Text style={{  marginLeft: '0%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" , textAlign:'center'}}>Namaz Steps</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigateFunc('Prayer')} style={{ width: '30%', }}>
          <Image
            source={require('../Assets/time.png')}
            style={{ width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '21%' }}

          />
          <Text style={{ marginLeft: '4%', marginRight: '5%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" , textAlign:'center'}}>Prayer's Time</Text>
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' , marginTop:0 , marginBottom:20}}>
      <TouchableOpacity onPress={() => this.props.navigateFunc('Qibla')} style={{ width: '30%', }}>
          <Image
            source={require('../Assets/compass.jpg')}
            style={{ width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '25%' }}

          />
          <Text style={{  marginLeft: '5%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" , textAlign:'center'}}>Qibla </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigateFunc('Tasbeeh')} style={{ width: '30%', }}>
        <Image
            source={require('../Assets/tasbeeh.png')}
            style={{backgroundColor:'#05761B' , width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '21%' }}

          />
          <Text style={{  marginLeft: '0%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" , textAlign:'center'}}>Tasbeeh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigateFunc('Wazuu')} style={{ width: '30%', height: '30%', }}>
          <Image
            source={require('../Assets/wazu.jpg')}
            style={{backgroundColor:'#05761B' , width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '21%' }}

          />
          <Text style={{ marginLeft: '4%', marginRight: '5%',  fontSize: 20 , justifyContent:'center' ,alignItems:"center" , textAlign:'center' }}>Ablution</Text>
        </TouchableOpacity>

      </View>
      
      </View>
      

    );
  }
};