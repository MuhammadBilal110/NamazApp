import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native';
import { setTopLevelNavigator } from './Navigation/Navigationservices'
import RootStackNavigator from './Navigation/Rootnavigation';

console.disableYellowbox = true
class App extends React.Component {
  render() {
   
    return (
      <>
      
        <RootStackNavigator
          ref={navigatorRef => {
            setTopLevelNavigator(navigatorRef);
          }}
          
        />
       
       
        
      </>
    );
  }
};

export default App;
