import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Paragraph, Button } from "react-native-paper";
import Drawers from "../screen/drawer";

import Drawer from "react-native-drawer";
import LinearGradient from "react-native-linear-gradient";

import Entypo from "react-native-vector-icons/Entypo";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
let { height, width } = Dimensions.get("window");
class About extends Component {
  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };

  backAction = () => {
    this.props.navigation.navigate("Home");
    return true;
  };
  navigateFunc = (navigateTo) => {
    this.props.navigation.navigate(navigateTo);
  };

  render() {
    return (
      <>
        <Drawer
          ref={(ref) => (this._drawer = ref)}
          tapToClose={true}
          acceptPan={true}
          content={
            <Drawers
              navigateFunc={this.navigateFunc}
              currentScreen={"Aboutt"}
              closeDrawer={this.closeDrawer}
            />
          }
          openDrawerOffset={0.25} // 20% gap on the right side of drawer
          type="overlay"
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 60,
                width: width,
                backgroundColor: "green",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => this.openDrawer()}
                style={{ marginLeft: 10 }}
              >
                <Entypo name={"menu"} size={25} color={"#fff"} />
              </TouchableOpacity>

              <Text
                style={{
                  color: "#fff",
                  marginLeft: width * 0.3,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                About
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
                style={{ marginLeft: 120 }}
              >
                <Entypo name={"home"} size={25} color={"#fff"} />
              </TouchableOpacity>
            </View>

            <ScrollView>
              <View
                style={{
                  height: height,
                }}
              >
                <Text style={{ margin: "4%", fontSize: 17, marginTop: "8%" }}>
                 coming 
                </Text>
                <Text style={{ margin: "4%", fontSize: 17 }}>
              soon
                </Text>
                <Text style={{ margin: "4%", fontSize: 17 }}>
               guys 
                </Text>
              </View>
              <View
                style={{
                  marginTop: -140,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                 Namaz timing
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Copyright &#169; 2021-2022{" "}
                </Text>
              </View>
            </ScrollView>
          </View>
        </Drawer>
      </>
    );
  }
}

const theme = {
  colors: { primary: "green" },
};

export default About;
