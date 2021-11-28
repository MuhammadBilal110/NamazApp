import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import Qibla from './QIblia'

import Drawer from 'react-native-drawer'
let { height, width } = Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Drawers from '../screen/drawer'


class QiblaContainer extends Component {

    navigateFunc = (navigateTo) => {
        
        this.props.navigation.navigate(navigateTo)
    }
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <Drawer
                        ref={(ref) => this._drawer = ref}
                        tapToClose={true}
                        acceptPan={true}
                        content={
                            < Drawers navigateFunc={this.navigateFunc} currentScreen={'Qibla'} closeDrawer={this.closeDrawer} />



                        }
                        openDrawerOffset={0.25} // 20% gap on the right side of drawer
                        type="overlay"
                    >
                        <View>
                            <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
                                <Text style={{ color: '#fff', marginLeft: width * 0.25, fontSize: 20, fontWeight: 'bold' }}>Qibla Finder</Text>
                                <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 90 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

                            </View>
                        </View>

                        <Qibla
                            navigateFunc={this.navigateFunc}
                        /></Drawer>
                </View>
            </>
        )
    }
}

export default QiblaContainer