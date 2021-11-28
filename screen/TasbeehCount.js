import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Modal, Image, Button, BackHandler, ScrollView,
  Dimensions, Alert,
  AsyncStorage
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Swipeout from 'react-native-swipeout';
const screenHeight = Dimensions.get('window').height

import Create from "../screen/Create";

let { height, width } = Dimensions.get('window')


class TasbeehCount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counts: 0,
      showModal: true,
      dataArray: [
        {
          key1: 'Allah - Akbhar', key2: 34, key3: 1
        },
        {
          key1: 'Alhamdulillah', key2: 33, key3: 2
        },
        {
          key1: 'SubhanAllah  ', key2: 34, key3: 3
        },
        {
          key1: 'Darood Sharif', key2: 100, key3: 4
        },
        {
          key1: 'Astaghfirullah', key2: 100, key3: 5
        },

      ]
    }
  }

  componentDidMount() {
    this.checkAsyncStorage()
    // this.gettasbeeh()

  }

  componentDidUpdate() {
    this.gettasbeeh();
    // this.checkAsyncStorage
  }

  gettasbeeh = async () => {
    const value = await AsyncStorage.getItem('tasbeeharray');
    if (value) {
      if (value.length !== this.state.dataArray) {
        let data = JSON.parse(value);

        this.setState({ dataArray: data }, () => {

        })
      }
    }
  }

  checkAsyncStorage = async () => {
    let TasbeehC = await AsyncStorage.getItem('tasbeehCount')
    let TasbeehN = await AsyncStorage.getItem('TasbeehName')
    let CountT = await AsyncStorage.getItem('CountTill')
    console.warn(TasbeehN, 'TasbeehC', TasbeehC, CountT)
    // if (TasbeehC !== 0) {
    //   TasbeehC = parseInt(TasbeehC) + 1

    // }

    if (TasbeehC && TasbeehN) {
      // return (
      //     <Modal
      //         animationType="slide"
      //         transparent={true}
      //         visible={this.state.showmodal}
      //         onRequestClose={() => {
      //             this.setState({ showmodal: false })
      //         }}
      //     >
      //               <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 , }}>
      //             <View style={{ margin: 22, backgroundColor: "white", borderRadius: 5, padding: 10, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 } ,shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
      //                 <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: width * 0.8 , }}>
      //                     <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', height: height * 0.13 }}>

      //                         <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  marginTop:'-5%'}}>
      //                             <Text style={{ margin: 5, marginTop: 2, fontSize: 25 , fontWeight:'bold' }}>Please Rate Us!</Text>
      //                         </View>
      //                         <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>

      //                             <TouchableOpacity onPress={() => { this.setState({ showmodal: false }) }} style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
      //                                 <Text style={{ marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>Cancel</Text>
      //                             </TouchableOpacity>
      //                             <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.namazapp')} style={{ width: '20%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
      //                                 <Text style={{ marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>Ok</Text>
      //                             </TouchableOpacity>
      //                         </View>
      //                     </View>
      //                 </View>
      //             </View>
      //         </View>
      //     </Modal>
      // )
      // <Modal
      //   animationType="slide"
      //   transparent={true}
      //   visible={this.state.showModal}
      //   onRequestClose={() => {
      //     this.setState({ showModal: false })
      //   }}
      // >
      //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, backgroundColor: 'red' }}>
      //     <View style={{ margin: 20, backgroundColor: "white", borderRadius: 5, padding: 10, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
      //       <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: width * 0.8 }}>
      //         <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', height: height * 0.18 }}>
      //           <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
      //             <Text style={{ marginLeft: 5, marginBottom: 8, fontWeight: 'bold', fontSize: 20 }}>hello</Text>
      //           </View>
      //           <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
      //             <Text style={{ margin: 5, marginTop: 2, fontSize: 17 }}>hello4</Text>
      //           </View>
      //           <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
      //             <View style={{ width: '30%' }}></View>
      //             <TouchableOpacity onPress={() => { this.setState({ showModal: false }) }} style={{ width: '20%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
      //               <Text style={{ marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>hello2</Text>
      //             </TouchableOpacity>
      //             <TouchableOpacity onPress={() => this.modalFunc()} style={{ width: '30%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      //               <Text style={{ marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>hello3</Text>
      //             </TouchableOpacity>
      //           </View>
      //         </View>
      //       </View>
      //     </View>
      //   </View>
      // </Modal>

      Alert.alert(
        "                 Tasbeeh",
        "         Do you want to Continue",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "yes", onPress: () => this.props.navigateFunc('Allah', TasbeehN, CountT, TasbeehC) }
        ],
        { cancelable: false }
      );

    }
  }


  // }}


  countHandler() {
    this.setState({
      counts: this.state.counts + 1,
    })
  }

  countReset() {
    this.setState({
      counts: 0,
    })
  }

  tasbehData = async (obj) => {

    let { dataArray } = this.state
    obj.key3 = dataArray.length + 1
    dataArray.push(obj);
    console.warn('dataArray', dataArray)
    this.setState({ dataArray })
    await AsyncStorage.setItem(
      'tasbeeharray',
      JSON.stringify(dataArray)
    );

    const value = await AsyncStorage.getItem('tasbeeharray');
  }

  deleteData = async(keyy) => {
    
    // console.warn('',i+1)
    // let a = this.state.dataArray.slice(i, 1)
    let b = this.state.dataArray.filter((data) => data.key3 !== keyy)
   
    this.setState({ dataArray: b })
    await AsyncStorage.setItem(
      'tasbeeharray',
      JSON.stringify(b)
    );
  }


  render() {




    return (

      <View style={{ backgroundColor: '#F2F2F2 ', flexDirection: 'column', height: '92%', marginTop: 60, }}>

        <Image
          source={require('../Assets/tasb.jpg')}
          style={{ width: '100%', height: '35%', }}
        />
        {/* {this.checkAsyncStorage()} */}

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >




          {this.state.dataArray.map((data, i) => {
            console.log('data', data.key3)
            return (



              <TouchableOpacity key={i} onPress={() => this.props.navigateFunc('Allah', data.key1, data.key2)} >
                {/* // style={{ borderWidth: 1, borderColor: '#FFFFFF', justifyContent: 'center', backgroundColor: '#FFFFFF',   marginLeft: '4%', marginRight: '4%', marginTop: '3%', paddingLeft: '2%' }} > */}
                <View style={{ width: width * 0.9, flexDirection: 'row', borderWidth: 1, alignContent: 'space-between', justifyContent: 'space-between', borderColor: 'black', borderRadius: 5, backgroundColor: '#fff', padding: 8, marginLeft: '4%', marginRight: '4%', marginTop: '3%', }}>
                  <Text style={{ textAlign: 'left', color: 'black', fontSize: 22, }}> {data.key1} </Text>
                  {data.key3 && data.key3 > 5 ?
                    <TouchableOpacity
                      onPress={() => this.deleteData(data.key3)}
                      style={{ alignContent: 'flex-start' }}>
                      <Entypo name={'circle-with-cross'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    :
                    null
                  }

                </View>
              </TouchableOpacity>
            )
          })}


        </ScrollView>





        <Create
          tasbehData={this.tasbehData

          }

        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0da98',
    // alignItems: 'center',

  },
  HeadContainer: {
    backgroundColor: 'black',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  header: {
    color: '#f297a5',
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: 'black',
  },
  goContainer: {
    borderWidth: 3,
    fontWeight: "bold",
    borderColor: 'black',
    marginTop: 100,
    width: 200,
    alignItems: 'center',
    height: 200,
    borderRadius: 1000,
    backgroundColor: '#94e094',
    justifyContent: 'center',
  },

  counter: {
    color: '#C2571A',
    fontSize: 50,
  },
  scrollView: {
    height: '60%',
    width: '100%',






  },
  contentContainer: {

    paddingBottom: 50
  }
});




export default TasbeehCount


