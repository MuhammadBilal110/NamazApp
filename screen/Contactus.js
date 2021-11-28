import React, { Component } from 'react'
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { TextInput, Paragraph, Button } from 'react-native-paper';
import Drawers from '../screen/drawer'
import axios from 'axios'

import Drawer from 'react-native-drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
let { height, width } = Dimensions.get('window')
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            message: '',
            loader: false,
            modalVisible: false,
            modalText: ''
        }
    }

    componentDidMount() {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }
    navigateFunc = (navigateTo) => {

        this.props.navigation.navigate(navigateTo)
    }
    backAction = () => {
        this.props.navigation.navigate('Home')
        return true
    }
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    sendEmail = () => {
        this.setState({ loader: true });
        let { firstName, lastName, email, contact, message } = this.state
        // console.log('hello world', firstName, lastName, email, contact, message)
        if (firstName, email, message) {
            axios.get(`https://namaz-app.herokuapp.com/send-email`, {
                params: {
                    email,
                    contact,
                    name: `${firstName} ${lastName}`,
                    message
                }
            }).then((response) => {
                if (response.data == "Hello World!") {
                    this.setState({
                        email: '', contact: '', firstName: '', lastName: '', message: '', loader: false,
                        modalVisible: true, modalText: 'Thank you for contacting us.'
                    })
                }
            }).catch((response) => {
                // console.warn('response Error', response);
                alert('No response from database please try again later.')
            });
        } else {
            this.setState({ modalText: 'Please fill complete form.', modalVisible: true, loader: false })
        }
    }

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
                    <View style={{ margin: 22, backgroundColor: "white", borderRadius: 5, padding: 10, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: width * 0.8, }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', height: height * 0.13 }}>

                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '-5%' }}>
                                    <Text style={{ margin: 5, marginTop: 2, fontSize: 20, fontWeight: 'bold' }}>{this.state.modalText}</Text>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                                    <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }) }}
                                        style={{ width: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', marginTop: 10, borderRadius: 5, padding: 3 }}>
                                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}>OK</Text>
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

        return (
            <>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    tapToClose={true}
                    acceptPan={true}
                    content={
                        <Drawers navigateFunc={this.navigateFunc} currentScreen={'Contact'} closeDrawer={this.closeDrawer} />


                    }
                    openDrawerOffset={0.25} // 20% gap on the right side of drawer
                    type="overlay"
                >
                    {this.modalView()}
                    <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                        <Text style={{ color: '#fff', marginLeft: width * 0.25, fontSize: 20, fontWeight: 'bold' }}>Contact Us</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginLeft: 100 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <TextInput
                            label="First Name"
                            selectionColor="green"
                            underlineColor="green"
                            theme={theme}
                            style={{ width: '45%', margin: 5 }}
                            onChangeText={(e) => this.setState({ firstName: e })}
                            value={this.state.firstName}
                        />
                        <TextInput
                            label="Last Name"
                            selectionColor="green"
                            underlineColor="green"
                            theme={theme}
                            style={{ width: '49%', margin: 5 }}
                            onChangeText={(e) => this.setState({ lastName: e })}
                            value={this.state.lastName}
                        /></View>
                    <TextInput
                        label="Contact No"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                        style={{ margin: 10 }}
                        onChangeText={(e) => this.setState({ contact: e })}
                        value={this.state.contact}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label="Email"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                        style={{ margin: 10 }}
                        onChangeText={(e) => this.setState({ email: e })}
                        value={this.state.email}
                    />
                    <TextInput
                        label="Message"
                        multiline={true}
                        numberOfLines={6}
                        selectionColor="green"
                        selectionColor="green"
                        underlineColor="green"
                        theme={theme}
                        style={{ margin: 10 }}
                        onChangeText={(e) => this.setState({ message: e })}
                        value={this.state.message}
                    />
                    <TouchableOpacity >
                        {this.state.loader ? <View style={{ marginTop: 10 }}><ActivityIndicator color={'green'} size='large' /></View> :
                            <Button
                                onPress={() => this.sendEmail()}
                                theme={themes}
                                size={24}
                                style={{ margin: 10, borderRadius: 10, backgroundColor: 'green', marginLeft: '30%', width: width * 0.4 }}>
                                <Text style={{ fontSize: 20 }}>Submit</Text>
                            </Button>}
                    </TouchableOpacity>




                </Drawer>





            </>
        )
    }
}

const theme = {
    colors: { primary: 'green', }

}
const themes = {
    colors: { primary: '#fff', }

}

export default Contact


