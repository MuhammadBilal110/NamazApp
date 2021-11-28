import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler, ScrollView, AsyncStorage } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'


let percent

class TasbeehCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ' ',
      counts: 0,
      countTill: 0,
      zikar: null,
      count: 0,
      couting: 0

    }
  }
  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
    let { zikar, countTill, CountC } = this.props.navigation.state.params
    if (this.props.navigation.state.params && this.state.zikar == null) {
      this.setState({ zikar, countTill, counts: parseInt(CountC) ? parseInt(CountC) : 0 }, () => {
        // percent = (100 / countTill) * this.state.counts
        console.log('zikar  , percent', this.state.zikar, this.state.countTill, this.state.counts, percent)
      })
      percent = (100 / countTill) * (parseInt(CountC) ? parseInt(CountC) : 0)

    }
  }

  componentDidUpdate() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
    let { zikar, countTill, CountC } = this.props.navigation.state.params
    console.log('zikar, countTill', this.props.navigation.state.params)
    if (this.props.navigation.state.params && this.state.zikar == null) {
      this.setState({ zikar, countTill, counts: parseInt(CountC) ? parseInt(CountC) : 0 })
      percent = (100 / countTill) * (parseInt(CountC) ? parseInt(CountC) : 0)
      

    }
  }

  backAction = () => {
    this.props.navigation.navigate('Tasbeeh')
    return true
  }





  countHandler = async () => {
    let { counts, countTill, } = this.state
    

    // counts = parseInt(counts)
    if (counts == countTill) {
      const   value = await AsyncStorage.removeItem('tasbeehCount')
      percent = 0
      
      this.setState({
        counts: 0,
      })

    }

    else {
      this.setState({ counts: this.state.counts + 1 })
      percent = (100 / countTill) * counts +2
      console.log('-----', this.state.countTill, this.state.zikar, counts)
      // count1 = counts.toString()
      let asyncCount = counts+1
      await AsyncStorage.setItem(
        'tasbeehCount',
        asyncCount.toString()
      );
      await AsyncStorage.setItem(
        'TasbeehName',
        this.state.zikar
      );
      await AsyncStorage.setItem(
        'CountTill',
        this.state.countTill.toString()
      );
      const value = await AsyncStorage.getItem('tasbeehCount');
      const value1 = await AsyncStorage.getItem('TasbeehName');
      const value2 = await AsyncStorage.getItem('CountTill');
    }
  }

  countReset  = async () => {
    this.setState({
      counts: 0,
   
      



    })
    percent = 0
    const   value = await AsyncStorage.removeItem('tasbeehCount')
    
  }



  render() {
    console.log('line no 111',percent)
    return (
      <>
        <View style={styles.container}>


          <Image
            source={require('../Assets/11.jpg')} 
            style={{ width: '100%', height: '100%', }} 
          />

          <View style={styles.HeadContainer}>
            <Text style={styles.header}> {this.state.zikar}</Text>

            <View style={{ marginTop: '15%', }}>

              <ProgressCircle
                percent={percent}
                radius={100}
                borderWidth={8}

                bgColor="#2FA803"
                color="#fff"
                shadowColor="green"


              >
                <TouchableOpacity onPress={this.countHandler.bind(this)}>
                  <Text style={{ fontSize: 80, color: '#fff' }}>{this.state.counts}</Text></TouchableOpacity>
              </ProgressCircle>
              {/* <ProgressCircle style={{ marginTop: 100 }}
                  percent={percent}
                  radius={100}
                  borderWidth={8}
                  shadowColor="#999"
                  color="null"
                  bgColor="#fff"
                >

                  <Text style={{ fontSize: 18 }}>

                    {this.state.counts}</Text>
                </ProgressCircle> */}
            </View>

            <Text style={{ fontSize: 35, color: '#fff', fontWeight: 'bold', marginTop: 20 }}> Out Of {this.state.countTill}</Text>
            <TouchableOpacity




              onPress=
              {this.countReset.bind(this)}>
              <Text style={{
                justifyContent: "center", marginTop: '30%', fontSize: 30, color: 'white',
                fontWeight: "bold",
                fontSize: 30,

              }} >  Reset </Text>
            </TouchableOpacity>
          </View>

        </View>
      </>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0da98',
    alignItems: 'center',


  },
  HeadContainer: {

    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 25,
    position: 'absolute'
  },
  header: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
    marginTop: '25%'

  },

});


export default TasbeehCounter