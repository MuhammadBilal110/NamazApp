import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, BackHandler, Text } from 'react-native';
import CompassHeading from 'react-native-compass-heading';

const Qibla = (props) => {
    const [compassHeading, setCompassHeading] = useState(0);

    useEffect(() => {
        const backAction = () => {
            props.navigateFunc('Home')
            return true
        }
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        const degree_update_rate = 3;

        CompassHeading.start(degree_update_rate, degree => {
            setCompassHeading(degree);
        });
        return () => {
            CompassHeading.stop();
        };
        return () => backHandler.remove();
    }, []);
    return (
        <View style={{ flex: 1 }}>
           

            <Image
                source={require('../Assets/kaaba.jpg')}
                style={{ width: '100%', height: '45%' }}
            />
            <Image
                style={[
                    styles.image,
                    { transform: [{ rotate: `${370 - compassHeading}deg` }] },
                    console.log(compassHeading)
                ]}
                
                resizeMode="contain"
                source={
                    require('../Assets/qiblaaa.png')
            }


            />
           


        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '80%',

        margin: '10%',
        flex: 1,


    },
    images: {
        width: '10%',

        margin: '10%',
        flex: 1,


    },
});

export default Qibla;