

import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, AsyncStorage, ScrollView,  BackHandler, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
let { height, width } = Dimensions.get('window')



class Duaen extends Component {
  state = {
    modalVisible: false,
    modalText: '',
    modalAyat: '',
    modalTarjuma: '',
    modalImage:[]
    
  };
  componentDidMount() { 
    
    

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  backAction = () => {
    this.props.navigation.navigate('More')
    return true
  }
  setModalVisible(visible,modalImage,  modalText,modalAyat, modalTarjuma,) {
    // let image =  require(modalImage) 
    this.setState({ modalVisible: visible, modalText,modalImage, modalAyat, modalTarjuma });
  }
  

  render() {
    return (



      <View style={{ flex: 1 }}>
        
        <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('More')} style={{ marginLeft: 10 }}><Ionicons name={'md-arrow-back-outline'} size={25} color={'#fff'} /></TouchableOpacity>
          <Text style={{ color: '#fff', marginLeft: width * 0.25, fontSize: 22, fontWeight: 'bold' }}>Supplication</Text>
          <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 80 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

        </View>

        <Image
          source={require('../Assets/Dua-.jpg')}
          style={{
            width: '100%', height: '30%', marginTop: 0,
          }}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
            <ScrollView>
            
          <View style={{ marginTop: 15 }}>
            <View>
             <Image source={this.state.modalImage}
             style={{width:width , marginTop:-90}} resizeMode='contain'
               
             
             />
              <Text style={{ fontSize: 25, margin: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>{this.state.modalText}</Text>


              <Text style={{ color: 'green', fontSize: 25, margin: 10, marginTop: 50, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>{this.state.modalAyat}</Text>
              <Text style={{ fontSize: 25, margin: 10, marginTop: 50, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>{this.state.modalTarjuma}</Text>


              {/* <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ marginTop: 30, color: 'black', textAlign: 'center', fontSize: 22, backgroundColor: '#d1edc0' }}>Hide Modal</Text>
              </TouchableHighlight> */}
            </View>
          </View>
          </ScrollView>
        </Modal>
        <ScrollView>
        <View style={{ marginLeft: 7 }}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true, require('../Assets/khane.png'),'کھانے سے پہلے کی دعا', ' بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ', 'میں نے الله کے نام کے ساتھ اور الله کی برکت پر کھانا شروع کیا');
            }}>
            <Card style={{ padding: 10, margin: 10, }}>
              <Text  style={{ fontSize:22}}>کھانے سے پہلے کی دعا</Text>

            </Card>


          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,require('../Assets/khne.png'),  'کھانے کے بعد کی دعا.', 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ', ' اللہ عزوجل کا شکر ہے جس نے ہمیں کھلایا پلایا اور مسلمانوں میں سے بنایا۔');
            }}>
            <Card style={{ padding: 10, margin: 8 ,}}>
              <Text style={{ fontSize:22}} >کھانے کے بعد کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true ,require('../Assets/ghar.png'),'گھر میں داخل ہوتے وقت کی دعا.', 'اَللّٰھُمَّ اِنِّیْ اَسْئَلُكَ خَیْرَالْمَوْلَجِ وَخَیْرَالْمَخْرَجِ', 'اے اللہ عَزَّ وَجَلَّ ! میں تجھ سے داخل ہونے اور نکلنے کی جگہوں کی بھلائی طلب کرتا ہوں ۔');
            }}><Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}}> گھر میں داخل ہوتے وقت کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,require('../Assets/gharrr.png'), 'گھر سے نکلتے وقت کی دعا', 'بِسْمِ اللّٰہِ تَوَكَّلْتُ عَلَى اللّٰہِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰہِ', 'اللہ عزوجل کے نام سے (گھر سے نکلتا ہوں) میں نے اللہ عزوجل پر بھروسہ کیا اللہ عزوجل کے بغیر نہ طاقت ہے (گناہوں سے بچنےکی) اور نہ وقت ہے (نیکیاں کرنے کی)۔');
            }}>
            <Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}}>گھر سے نکلتے وقت کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,require('../Assets/masjidd.png'),  'مسجد میں داخل ہونے کی دعا', 'اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِکَ.', '’’اے اللہ! میرے لیے رحمت کے دروازے کھول دے۔‘‘');
            }}>
            <Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}}>مسجد میں داخل ہونے کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,require('../Assets/masjidn.png'), 'مسجد سے نکلنے کی دعا', 'اَللّٰهُمَّ اِنِّيْ اَسْاَلُکَ مِنْ فَضْلِکَ وَرَحْمَتِکَ', '’’اے اللہ! میں تجھ سے تیرا فضل اور تیری رحمت مانگتا ہوں۔‘‘');
            }}>
            <Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}} >مسجد سے نکلنے کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,require('../Assets/safar.png'), 'سفر اور سواری کی دعا', 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ', 'اللہ عزوجل کا شکر ہے، پاک ہے وہ جس نے ہمارے لئے اس(سواری کو) مسخر کیا اور ہم اس کو فرمانبردار نہیں بنا سکتے تھے۔');
            }}><Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}}>سفر اور سواری کی دعا</Text>

            </Card>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true, require('../Assets/preshani.png'),'مصیبت و پریشانی کے وقت کی دعا', ' إِنَّا لِلهِ وَ إِنَّا إِلَيْهِ رَاجِعُوْن. اَللّٰهُمَّ أْجُرْنِيْ فِيْ مُصِيبَتِيْ وَاخْلُفْ لِيْ خَيْرا مِنْهَا', 'يقینا ہم اللہ ہى كى ملكيت ہیں اور اسى كى طرف لوٹ كر جانے والے ہیں۔اے اللہ مجھے ميرے اس صدمے یا تكليف كا اجر دے اور بدلے ميں مجھے اس سے زيادہ بہتر دے۔(صحیح مسلم');
            }}>
            <Card style={{ padding: 10, margin: 8 }}>
              <Text style={{ fontSize:22}}>مصیبت و پریشانی کے وقت کی دعا</Text>

            </Card>

          </TouchableHighlight>
         
        </View>
        </ScrollView>
      </View>
      
    );
  }
}
export default Duaen