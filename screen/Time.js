/*This is an example of React Native Get Current Date Time*/
import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, Dimensions } from 'react-native';
let { height, width } = Dimensions.get('window')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
      time: '',

    };
  }
  componentDidMount() {


    var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let TimeType = ''
    let d = new Date();
    let months = monthNames[d.getMonth()]


    let dateTime = setInterval(() => {
      var that = this;
      var date = new Date().getDate(); //Current Date

      var month = months;
      // var month = new  Date().getMonth() +1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      // var hours = new Date().getHours(); //Current Hours
      // var min = new Date().getMinutes(); //Current Minutes


      that.setState({
        //Setting the value of the date time
        date:
          date +'-' + month + '-' + year ,
      });
    }, 1000);

    let Time = setInterval(() => {
      var that = this;

      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds();



      if (hours <= 11) {

        TimeType = 'AM';

      }
      else {
        TimeType = 'PM';

      }
      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      let Hours = hours < 10 ? '0' + hours : hours
      let Minutes = min < 10 ? '0' + min : min
      that.setState({
        //Setting the value of the date time
        time:`${Hours}:${Minutes}:${TimeType}`
      });
    }, 1000)
  }

  render() {
    return (
      <View>


        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              fontWeight: 'bold'
            }}>
            {this.state.date}
          </Text>

        </View>
        <View style={{ marginLeft: 235, }}>
          <Text
            style={{
              justifyContent: 'flex-start',
              fontSize: 20,
              marginTop: height * -0.11,
            
              color: 'white',
              fontWeight: 'bold'




            }}>
            {this.state.time}
          </Text>
        </View>

      </View>
    );
  }
}