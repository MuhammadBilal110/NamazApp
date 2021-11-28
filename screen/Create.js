import React, { useState, useRef } from 'react';
import { View, Alert , Text } from 'react-native';
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    Provider,
    TextInput,
} from 'react-native-paper';

//const sleep = (ms: Number) => new Promise(resolve => setTimeout(resolve, ms));

const Crete = ({tasbehData}) => {
    const [inputVal, setInputVal] = useState("");
    const [inputVals, setInputVals] = useState("");
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    console.log(inputVal);
    console.log(inputVals);

    return (
        <Provider>
            <View>
                <Button onPress={() => setIsDialogVisible(true)} theme={theme} style={{ color:'red' , backgroundColor: 'green', fontSize: 30 , marginTop: '-6%' , }}>Create New Tasbeeh</Button>
                <Portal>
                    <Dialog style={{ backgroundColor: 'white' }}
                        visible={isDialogVisible}
                        onDismiss={() => setIsDialogVisible(false)}>
                        <Dialog.Title style={{color: 'black',textAlign:'center' , fontWeight:'bold' }} >Create New Tasbeeh</Dialog.Title>
                        <Dialog.Content>
                            <Dialog.Title style={{ color: 'black', textAlign:'center'}} > Tasbeeh Name</Dialog.Title>

                            <TextInput style={{  backgroundColor: 'green', marginTop: -10, marginBottom: 0 }}
                                value={inputVal}
                                onChangeText={text => setInputVal(text)}
                                selectionColor="#fff"
                                underlineColor="green"
                                theme={theme}
                      
                            />
                            <Dialog.Title style={{ color: 'black', textAlign:'center' }} > Tasbeeh Count</Dialog.Title>

                            <TextInput style={{ backgroundColor: 'green' , color:'red' }}
                                keyboardType='numeric'
                                value={inputVals}
                                onChangeText={text => setInputVals(text)}
                                selectionColor="#fff"
                                underlineColor="green"
                                theme={theme}
                               
                            />

                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {
                                let tasbehObj = {
                                    key1: inputVal,
                                    key2: inputVals
                                }
                                if(inputVals && inputVal) {
                                    tasbehData(tasbehObj)
                                    setIsDialogVisible(false)
                                } else {
                                    alert('Please Enter Value')
                                }
                            }}
                            theme={themes}
                            contentStyle={{ height: 60 ,  marginRight:'45%'  }}
                            
                            ><Text style={{ fontSize:25}}>Add</Text></Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
};

const themes ={
    colors:{
        primary :'green'
    }

}
const theme={
    colors: {
               placeholder: 'white', text: 'white', primary: 'white',
               underlineColor: 'transparent', background: '#003489'
       }
 }


export default Crete;
