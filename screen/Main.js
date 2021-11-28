

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image,
    ImageBackground,
    Dimensions,
    BackHandler,
    Alert, Linking, Modal,
    TouchableOpacity, Share
} from 'react-native';



import Slider from '../screen/Slider'
import Component from '../screen/Components.js'
import Time from '../screen/Time.js'
import IslamicDate from './IslamicDate'
// import Com from '../screen/Com.js'
// import Qibla from '../screen/QIblia.js'
import Entypo from 'react-native-vector-icons/Entypo'
import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Drawers from '../screen/drawer'

let { height, width } = Dimensions.get('window')


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            showmodal: false
        }
    }

    handleBackPress = () => {
        console.log('hello thi is backAction')
        this.setState({ showmodal: !this.state.showmodal })
        // Alert.alert("Hold on!", "Are you sure you want to go back?", [
        //   {
        //     text: "Cancel",
        //     onPress: () => null,
        //     style: "cancel"
        //   },
        //   { text: "YES", onPress: () => BackHandler.exitApp() }
        // ]);
        return true;
    };
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    // onShare = async () => {


    //     try {
    //         const result = await Share.share({
    //             message:
    //                 'Salah App   ',
    //         });
    //         if (result.action === Share.sharedAction) {
    //             if (result.activityType) {
    //                 // shared with activity type of result.activityType
    //             } else {
    //                 // shared
    //             }
    //         } else if (result.action === Share.dismissedAction) {
    //             // dismissed
    //         }
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };


    navigateFunc = (navigateTo) => {
        if (navigateTo == 'Wazuu') {
            this.props.navigation.navigate(navigateTo, { screenn: 'Home' })
        } else {
            this.props.navigation.navigate(navigateTo)
        }
    }


    modaalView = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showmodal}
                onRequestClose={() => {
                    this.setState({ showmodal: false })
                }}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, }}>
                    <View style={{ margin: 22, backgroundColor: "white", borderRadius: 5, padding: 10, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: width * 0.8, }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', height: height * 0.13 }}>

                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '-5%' }}>
                                    <Text style={{ margin: 5, marginTop: 2, fontSize: 25, fontWeight: 'bold' }}>Please Rate Us!</Text>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>

                                    <TouchableOpacity onPress={() => { BackHandler.exitApp(); }} style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                        <Text style={{ marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.namazapp')} style={{ width: '20%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Text style={{ marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>Ok</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }


    render() {
        console.log('asdfasdfasdf',this.backHandler)
        return (
            <>
                {this.modaalView()}

                <Drawer
                    ref={(ref) => this._drawer = ref}
                    tapToClose={true}
                    acceptPan={true}
                    content={
                        < Drawers navigateFunc={this.navigateFunc} currentScreen={'Home'} closeDrawer={this.closeDrawer} />


                    }


                    openDrawerOffset={0.25} // 20% gap on the right side of drawer
                    type="overlay"
                >


                    <View style={{ flex: 1 }}>

                        <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                            <Text style={{ color: '#fff', marginLeft: width * 0.32, fontSize: 20, fontWeight: 'bold' }}>Home</Text>
                        </View>
                        <Image
                            source={require('../Assets/bg.jpg')}
                            style={{ width: '100%', height: '80%', }}


                        />
                        <Text style={styles.bgimgText}> <Time /> </Text>
                        <Text style={styles.bgimgTexxt}> <IslamicDate /> </Text>

                    </View>

                    <Component
                        navigateFunc={this.navigateFunc}
                    />
                </Drawer>

            </>

        );
    }
};

const styles = StyleSheet.create({



    bgimgText: {

        position: 'absolute', // child
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        textAlign: "left",
        marginTop: height * 0.188,
        marginLeft: width * 0.05,


    },
    bgimgTexxt: {

        position: 'absolute', // child
        fontFamily: 'sans-serif',
        fontWeight: 'normal',

        marginTop: height * 0.1,
        marginLeft: width * 0.06,
        color: 'white',

        fontSize: 16,




    }

});
