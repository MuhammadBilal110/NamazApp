import React from 'react';
import { Platform  , Image} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screen/Main'
import Qibla from '../screen/QiblaContainer'

import NamesofAllah from '../screen/Names'

import Moreitem from '../screen/Moreitem'
import Prayer from '../screen/Prayer'


import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
const TabNavigator = createBottomTabNavigator(
    {
        
        Prayer: {
            screen: Prayer,
        },
        Qibla: {
            screen: Qibla,
        },
        Home: {
            screen: Home,
        },
       
        AllahNames: {
            screen: NamesofAllah,
        },

        // More: {
        //     screen: Moreitem,
        // },


    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = 'home'
                        break;
                    case 'Qibla':
                        iconName = 'compass'
                        break;
                    // case 'More':
                    //     iconName = 'more-horizontal'
                    //     break;
                    case 'Prayer':
                        iconName = 'time'
                        break;
                    case 'AllahNames':
                        iconName = 'heart-circle'
                        break;

                }
                if (routeName == 'Qibla') {
                    return (
                        <Ionicons
                            name={iconName}
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={focused ? 'green' : "rgba(0, 0, 0, 0.54)"}

                        />
                    )
                }
                //  else if (routeName == 'More') {
                //     return (
                //         // <Image 
                //         // source={require('../Assets/more.png' 
                //         //     )}
                //         //     style={{width:'40%'}} resizeMode='contain'
                //         // />
                //         <Feather
                //             name={iconName}
                //             size={30}
                //             style={{ marginBottom: -3 }}
                //             color={focused ? 'green' : "rgba(0, 0, 0, 0.54)"}
                //         />
                //     )
                // }
                else if (routeName == 'Prayer') {
                    return (
                        <Ionicons
                            name={iconName}
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={focused ? 'green' : "rgba(0, 0, 0, 0.54)"}
                        />
                    )
                }
                else if (routeName == 'AllahNames') {
                    return (
                        <Ionicons
                            name={iconName}
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={focused ? 'green' : "rgba(0, 0, 0, 0.54)"}
                        />
                    )
                }

                else {
                    return (
                        <Entypo
                            name={iconName}
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={focused ? 'green' : "rgba(0, 0, 0, 0.54)"}
                        />
                    )
                }
            },
        }),
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: 'green',
            
            inactiveTintColor: "rgba(0, 0, 0, 0.54)",
            labelStyle: {
                fontSize: 13,
            },
            style: {
                backgroundColor: 'white',
                height: 60,
                paddingBottom: 6,
                ...Platform.select({
                    android: {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.02,
                        elevation: 1,
                        marginTop: 2,
                    },
                }),
            },
        }
    }
);

export default createAppContainer(TabNavigator);