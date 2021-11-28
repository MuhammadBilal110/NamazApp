import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';
 
import SwiperFlatList from 'react-native-swiper-flatlist';
 
export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  }
}
 
export const { width, height } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  }
});