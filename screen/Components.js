import React, { Component } from "react";
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card } from "react-native-paper";

let { height, width } = Dimensions.get("window");

const Data = [
  {
    image: require("../Assets/Allah.jpg"),
    name: "99 Names",
    screeName :"AllahNames"
  },
  {
    image: require('../Assets/namaz.png'),
    name: "Prayer's Time",
    screeName :"Prayer"

  },
  {
    image: require("../Assets/compass.jpg"),
    name: "Qibla",
    screeName :"Qibla"

  },
  {
    image: require("../Assets/tasbeeh.png"),
    name: "Tasbeeh Counter",
    screeName :"Tasbeeh"

  },
];

export default class FlexDirectionBasics extends Component {
  render() {
    return (
        <View
          style={{
            flexDirection: "row",
            flexWrap:'wrap',
            margin:10,

          }}
        >
          {Data.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigateFunc(item.screeName)}
                style={{
                  width: width * 0.42,
                  height: height * 0.2,
                  backgroundColor: "#FFF",
                  borderRadius: 20,
                  elevation: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal:10,
                  marginVertical:10,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 60, height: 60, borderRadius: 100 / 1.5 }}
                />

                <Text
                  style={{
                    fontSize: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* <TouchableOpacity onPress={() => this.props.navigateFunc('Namaz')} style={{ width: '30%', }}>
          <Image
            source={require('../Assets/namaz.png')}
            style={{ width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '23%' }}

          />
          <Text style={{  marginLeft: '0%', fontSize: 20  ,justifyContent:'center' ,alignItems:"center" , textAlign:'center'}}>Namaz Steps</Text>
        </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => this.props.navigateFunc("Prayer")}
            style={{
              width: "45%",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: 20,
              elevation: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../Assets/time.png")}
              style={{ width: 60, height: 60, borderRadius: 100 / 1.5 }}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Prayer's Time
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigateFunc("Qibla")}
            style={{
              width: "45%",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: 20,
              elevation: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Image
              source={require("../Assets/compass.jpg")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100 / 1.5,
              }}
            />
            <Text
              style={{
                marginLeft: "5%",
                fontSize: 20,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Qibla{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigateFunc("Tasbeeh")}
            style={{
              width: "45%",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: 20,
              elevation: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Image
              source={require("../Assets/tasbeeh.png")}
              style={{
                backgroundColor: "#05761B",
                width: 60,
                height: 60,
                borderRadius: 100 / 1.5,
              }}
            />
            <Text
              style={{
                marginLeft: "0%",
                fontSize: 20,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Tasbeeh
            </Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => this.props.navigateFunc('Wazuu')} style={{ width: '30%', height: '30%', }}>
          <Image
            source={require('../Assets/wazu.jpg')}
            style={{backgroundColor:'#05761B' , width: 60, height: 60, borderRadius: 100 / 1.5, marginLeft: '21%' }}

          />
          <Text style={{ marginLeft: '4%', marginRight: '5%',  fontSize: 20 , justifyContent:'center' ,alignItems:"center" , textAlign:'center' }}>Ablution</Text>
        </TouchableOpacity> */}
        </View>
    );
  }
}
