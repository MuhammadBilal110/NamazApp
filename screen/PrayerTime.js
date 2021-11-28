
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions, Button, TouchableOpacity, Platform,
  PermissionsAndroid, ActivityIndicator, ScrollView
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';
import Geolocation from 'react-native-geolocation-service';


let { height, width } = Dimensions.get('window')
const axios = require('axios').default;
export default class ExampleOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTime: '',
      tableData: [
        { engName: 'Fajar', time: '05:14 AM', urduName: 'الفجر' },
        { engName: 'Sun Rise', time: '07:03 AM', urduName: 'طلوع آفتاب' },
        { engName: 'Dhuhr', time: '12:17 PM', urduName: 'ٱلظُّهْر' },
        { engName: 'Asr', time: '04:27 PM', urduName: 'العصر' },
        { engName: 'Maghrib', time: '06:05 PM', urduName: 'المغرب' },
        { engName: 'Ishaa', time: '07:21 PM', urduName: 'العشاء' }
      ],
      namazTiming: {},
      loader: true
    }
  }

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await this.hasLocationPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();
    console.log('hasLocationPermission', hasLocationPermission)
    if (!hasLocationPermission) {
      return;
    }

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          let { latitude, longitude } = position.coords
          this.setState({ location: position, loading: false, longitude, latitude });
          console.log(position.coords.latitude, position.coords.longitude);
          this.callforApi(latitude, longitude)
        },
        (error) => {
          this.setState({ loading: false });
          console.log(error);
        },
        {
          enableHighAccuracy: this.state.highAccuracy,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: this.state.forceLocation,
          showLocationDialog: this.state.showLocationDialog,
        },
      );
    });
  };


  callforApi(latitude, longitude) {
    axios.get(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&date=${new Date().getDate()}&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`)
      .then(response => {
        this.setState({ namazTiming: response.data.data[new Date().getDate()].timings, loader: false })
      })
      .catch(error => {
        console.log('getting error from axios', error);
      })
  }



  componentDidMount() {
    this.getLocation();
  }



  render() {
    const state = this.state;
    let { isTime } = this.state
    let { namazTiming } = this.state


    let dhuhrHours = namazTiming.Dhuhr ? parseInt(namazTiming.Dhuhr.split(' ')[0].split(':')[0]) <= 12 ? namazTiming.Dhuhr.split(' ')[0] : parseInt(namazTiming.Dhuhr.split(' ')[0].split(':')[0]) - 12 : 'waiting'
    let dhuhrMinute = namazTiming.Dhuhr && namazTiming.Dhuhr.split(' ')[0].split(':')[1]
    let dhuhrTime = dhuhrHours < 10 ? '0' + dhuhrHours + ":" + dhuhrMinute : dhuhrHours

    let asarHours = namazTiming.Asr ? parseInt(namazTiming.Asr.split(' ')[0].split(':')[0]) <= 12 ? namazTiming.Asr.split(' ')[0] : parseInt(namazTiming.Asr.split(' ')[0].split(':')[0]) - 12 : 'waiting'
    let asarMinute = namazTiming.Asr && namazTiming.Asr.split(' ')[0].split(':')[1]
    let asarTime = asarHours < 10 ? '0' + asarHours + ":" + asarMinute : asarHours


    let mughribHours = namazTiming.Maghrib ? parseInt(namazTiming.Maghrib.split(' ')[0].split(':')[0]) <= 12 ? namazTiming.Maghrib.split(' ')[0] : parseInt(namazTiming.Maghrib.split(' ')[0].split(':')[0]) - 12 : 'waiting'
    let mughribMinute = namazTiming.Maghrib && namazTiming.Maghrib.split(' ')[0].split(':')[1]
    let mughribTime = mughribHours < 10 ? '0' + mughribHours + ":" + mughribMinute : mughribHours



    let ishaHours = namazTiming.Isha ? parseInt(namazTiming.Isha.split(' ')[0].split(':')[0]) <= 12 ? namazTiming.Isha.split(' ')[0] : parseInt(namazTiming.Isha.split(' ')[0].split(':')[0]) - 12 : 'waiting'
    let ishaMinute = namazTiming.Isha && namazTiming.Isha.split(' ')[0].split(':')[1]
    let ishaTime = ishaHours < 10 ? '0' + ishaHours + ":" + ishaMinute : ishaHours



    return (
      <View style={styles.container}>

        <Image
          source={require('../Assets/3.jpg')}
          style={{ width: '100%', height: '40%', }}
        />


        <ScrollView style={{ marginTop: '2%' }}>
          {this.state.loader ? <ActivityIndicator size="large" color='green' /> :
            <View style={{ height: height * 0.5, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <Card style={{ backgroundColor: isTime == 'Fajar' ? 'green' : 'white', height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.95, padding: 10 }}>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}><Text style={{ color: isTime == 'Fajar' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Fajar</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Text style={{ color: isTime == 'Fajar' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{namazTiming.Fajr && namazTiming.Fajr.split(' ')[0]} AM</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}><Text style={{ color: isTime == 'Fajar' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>الفجر</Text></View>
              </Card>
              <Card style={{ backgroundColor: isTime == 'Dhuhr' ? 'green' : 'white', height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.95, padding: 10 }}>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}><Text style={{ color: isTime == 'Dhuhr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Zhuhr</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Text style={{ color: isTime == 'Dhuhr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{dhuhrTime} PM</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}><Text style={{ color: isTime == 'Dhuhr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>ٱلظُّهْر</Text></View>
              </Card>
              <Card style={{ backgroundColor: isTime == 'Asr' ? 'green' : 'white', height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.95, padding: 10 }}>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}><Text style={{ color: isTime == 'Asr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Asar</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Text style={{ color: isTime == 'Asr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{asarTime} PM</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}><Text style={{ color: isTime == 'Asr' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>العصر</Text></View>
              </Card>
              <Card style={{ backgroundColor: isTime == 'Maghrib' ? 'green' : 'white', height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.95, padding: 10 }}>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}><Text style={{ color: isTime == 'Maghrib' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Maghrib</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Text style={{ color: isTime == 'Maghrib' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{mughribTime} PM</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}><Text style={{ color: isTime == 'Maghrib' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>المغرب</Text></View>
              </Card>
              <Card style={{ backgroundColor: isTime == 'Ishaa' ? 'green' : 'white', height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.95, padding: 10 }}>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}><Text style={{ color: isTime == 'Ishaa' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Ishaa</Text></View>
                {/* 19 <= 12 */}
                <View style={{width:'33%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Text style={{ color: isTime == 'Ishaa' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{ishaTime} PM</Text></View>
                <View style={{width:'33%', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}><Text style={{ color: isTime == 'Ishaa' ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>العشاء</Text></View>
              </Card>
            </View>
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff', },
  text: { margin: 6, paddingRight: 10, paddingLeft: 10, paddingTop: 10, padding: 4, alignItems: 'center', fontSize: 20, }
});