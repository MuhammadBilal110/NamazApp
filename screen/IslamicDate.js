import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button, Dimensions, Card, BackHandler } from 'react-native';
import moment from 'moment-hijri'
const axios = require('axios').default;

class Wazuu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hijriDate: '',
            hijriDate1: ' ',
            hijriMonth: ' ',
            hijriyear: ' ',
            hijriyears: ' ',
            hijriDatee: ''
        }
    }


    componentDidMount() {
        var iMonthNames = new Array("", "Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir",
            "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha'ban",
            "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja");
        // axios.get(`http://api.aladhan.com/v1/gToH?date=17-10-2020`)
        let dateToday = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
        console.log(dateToday)
        axios.get(`http://api.aladhan.com/v1/gToH?date=${dateToday}`)

            .then(response => {
                let a = response.data.data.hijri.date.split('-')
                this.setState({
                    hijriDate: a[0]-1, hijriMonth: iMonthNames[a[1].toString().substr(1)]
                    , hijriyear: a[2]
                })
            })
            .catch(error => {
                console.log('getting error from axios', error);
            })
    }
    render() {
        return (
            <>
                <Text style={{ marginRight: '2', fontSize: 35, fontWeight: "bold", }}>{this.state.hijriDate} {"\n"}</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold", }}>{this.state.hijriMonth} </Text>
                <Text style={{ fontSize: 17, fontWeight: "bold", }}>{this.state.hijriyear} {"\n"}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", }}>{this.state.hijriyears} </Text>

            </>
        )


    }
}
export default Wazuu