

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
import { Card } from 'react-native-paper';
import ImageSlider from 'react-native-image-slider';
import NamazRaqat from './NamazRaqat'
import Nav from './Navigator'
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    Provider,
    TextInput,
} from 'react-native-paper'; ``

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

let { height, width } = Dimensions.get('window')


export default class drawers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        }
    }
    



    onShare = async () => {


        try {
            const result = await Share.share({
                message:
                    'Salah App  , Link: https://bit.ly/2Vazqat ',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    modalView = () => {
        let { modalVisible } = this.state
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    this.setState({ modalVisible: false })
                }}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, }}>
                    <View style={{ backgroundColor: 'green', height: height * 0.08, width: width * 0.85, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', marginLeft: 30, fontSize: 20 }}>Follow Us</Text>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={{ marginLeft: 140, }}><Entypo name={'circle-with-cross'} size={25} color={'#fff'} /></TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: height * 0.22, width: width *0.85 , borderWidth:1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 8, marginTop: '10%', }}>
                            <TouchableOpacity style={{ marginLeft: 10 }}><Entypo name={'facebook-with-circle'} size={35} color={'#3b5998'} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/digitizevolution/')}>
                                <Text style={{ fontSize: 15, marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#D3D3D3', color: '#686A68', fontWeight: 'bold' }}>LIKE OUR FACEBOOK PAGE</Text></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 8, marginTop: '10%', }}>
                            <TouchableOpacity style={{ marginLeft: 10 }}><Entypo name={'instagram-with-circle'} size={35} color={'#C13584'} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/digitizevolution/')}>
                                <Text style={{ fontSize: 15, marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#D3D3D3', color: '#686A68', fontWeight: 'bold' }}>LIKE OUR INSTAGRAM ACCOUNT</Text></TouchableOpacity>
                        </View>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: 8, marginTop: '10%', }}>
                            <TouchableOpacity style={{ marginLeft: 10 }}><Entypo name={'linkedin-with-circle'} size={35} color={'#2867B2'} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/digitizevolution/')}>
                                <Text style={{ fontSize: 15, marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#D3D3D3', color: '#686A68', fontWeight: 'bold' }}>LIKE  OUR LINKEDIN ACCOUNT</Text></TouchableOpacity>
                        </View> */}
                    </View>

                </View>
            </Modal>
        )
    }

    follow = () => {
        this.props.closeDrawer()
        this.setState({ modalVisible: true })
    }

    render() {

        return (
            <>

                <View style={{ backgroundColor: 'white', height: height }}>
                    <LinearGradient colors={['green', 'green']} >
                        <View style={{ height: height * 0.3, alignItems: 'center', justifyContent: 'center' }}>

                            <Image
                                source={require('../Assets/salah.png')}
                                style={{ width: width * 0.6, height: height * 0.3, }} resizeMode='contain'


                            />
                            {/* <Text style={{ color: '#fff', fontSize: 17, fontfamily: 'CroissantOne', fontWeight: 'bold', marginTop: '-12%' }}>Prayer's  Times</Text> */}

                        </View>
                    </LinearGradient>

                    {this.modalView()}
                    <TouchableOpacity onPress={() => this.props.navigateFunc('About')} style={{ backgroundColor: this.props.currentScreen == 'About' ? 'grey' : null, flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Ionicons name={'person'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, marginTop: 4, fontSize: 17 }}>About Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onShare()} style={{ flexDirection: 'row', marginLeft: 20 }}><Entypo name={'share'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, fontSize: 17 }}>Share</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.follow()} style={{ flexDirection: 'row', marginLeft: 20 }}><MaterialIcons name={'quick-contacts-mail'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, fontSize: 17 }}>Follow Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigateFunc('Privacy')} style={{ backgroundColor: this.props.currentScreen == 'Privacy' ? 'grey' : null, flexDirection: 'row', marginLeft: 20 }}><MaterialIcons name={'privacy-tip'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, fontSize: 17 }}>Privacy Policy</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigateFunc('Contact')} style={{ flexDirection: 'row', marginLeft: 20 }}><MaterialIcons name={'quick-contacts-mail'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, fontSize: 17 }}>Contact Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.namazapp')} style={{ flexDirection: 'row', marginLeft: 20 }}><EvilIcons name={'star'} size={25} color={'black'} /><Text style={{ height: height * 0.07, marginLeft: 20, fontSize: 17 }}>Rate Us</Text></TouchableOpacity>

                </View>



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
