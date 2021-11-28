import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal,ScrollView, Button,Dimensions, Card, BackHandler } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import SwiperFlatList from 'react-native-swiper-flatlist';
let { height, width } = Dimensions.get('window')
import Drawer from 'react-native-drawer'

import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
class Wazuu extends Component {

  navigateFunc = (navigateTo) => {
    console.log('navigateTo', navigateTo)
    this.props.navigation.navigate(navigateTo)
  }

  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction


    );
   
  }


  backAction = () => {
    let { screenn } = this.props.navigation.state.params

    if (screenn == 'More') {
      this.props.navigation.navigate('More')
    } else if (screenn == 'Home') {
      this.props.navigation.navigate('Home')
    }
    return true
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('More')} style={{ marginLeft: 10 }}><Ionicons name={'md-arrow-back-outline'} size={25} color={'#fff'} /></TouchableOpacity>
          <Text style={{ color: '#fff', marginLeft: width * 0.3, fontSize: 20, fontWeight: 'bold' }}>Ablution</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginLeft: '30%' }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

        </View>

        <Image
          source={require('../Assets/Wazuu.jpg')}
          style={{
            width: '100%', height: '30%',
          }}
        />
        <SwiperFlatList
          showPagination
          paginationActiveColor="green"
          paginationStyleItem={{width:10,height:10, marginLeft:-5, marginRight:-5}}
         
          ref={ref => {
            this.list_ref = ref;

          }}
        >
         
         
         
         
         <View>

<View>
  <Text style={styles.teext}> نیت    </Text>

</View>
<View style={[styles.child,]}>
  <Text style={styles.text}>وضو کے لئے نیت کرناسنت ہے، نیت دل کےارادے کو کہتے ہیں۔دل میں نیت ہوتے ہوئے زبان سے کہہ لیناافضل ہے ۔ بسم الله کہہ لیجیے کہ یہ بھی سنت ہے۔</Text>
</View>

</View>


<View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> سر کا مسح کرنا
   </Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}> پھر نئے پانی سے دونوں ہاتھ تر کر کے پورے سر کا مسح کرے ، اس طرح کہ پیشانی کے بالوں سے دونوں۔</Text>
            </View>

          </View>








 
<View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> ہاتھ دھونا    </Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}>اب اپنے دونوں ہاتھ کلائی تک تین دفعہ, دھویئں، اس بات کا دھیان رکھیں کہ آپ اپنے دائیں ہاتھ سے بائیاں ہاتھ دھوئیں اور بائیں| دائیاں۔ دونوں ہاتھوں کی انگلیوں کا خلال بھی کیجیئے. ہاتھ دھونے کے اس عمل کو تین بار دهورایئے۔ ہاتھ سے</Text>
            </View>
          </View>



          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> ناک صاف کرنا  </Text>
            </View>
            
            <ScrollView style={[styles.child,]}>
              <Text style={styles.text}> مدد سے چلو بنا کر ناک میں تین بار پانی ڈالیں ۔ احتیاط سے پانی ناک میں چڑھایئ اور بغیر خود کو نقصان جا پہنچائے فورا باہر  نکال دیں ۔ اگر ناک میں پانی چڑھانا آپکے لیے مشکل ہو تو ، آپ ناک گیلی کرنے اور جڑ تک پانی پہنچانے کے لئے اپنے بائیں ہاتھ کی چھوٹی انگلی کا استعمال کر سکتے ہیں۔{"\n"}{"\n"}</Text>
            </ScrollView>

          </View>


          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>     منہ دھونا </Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}>پھر تین بار منہ دھوئیں کہ پیشانی کے بالوں سے لے کر | تھوڑی کے نیچے تک  اور دونوں کانوں کی لو تک کوئی جگہ خشک نہ رہے</Text>
            </View>

          </View>


          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>کانوں کی صفائی کرنا
</Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}>پھر شہادت کی
              انگلی سے کان کے
              ( اندرونی حصہ اور
              انگوٹھے کے پیٹ
              سے ان کی بیرونی
              سطح اور انگلیوں
              کی پشت سے گردن
 کا مسح کریں</Text>
            </View>

          </View>

          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> بازو دھونا    </Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}>پھر تین بار کلائی سے کہنیوں تک اپنا بازو ایسے دھوئیں  کہ کوئی حصہ خشک نہ رہے ، پہلے دائیں بازو کو بایئ ا ہاتھ سے اور پھر بائیں بازو کو دائیں ہاتھ سے تین بار دھوئیں</Text>
            </View>
           
          </View>




         
         
        
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>پاؤں دھونا
              
          </Text>
            </View>
            <View style={[styles.child,]}>
              <Text style={styles.text}>پہلے اپنا دائیاں پاؤں
              دھوئیں اور پھر بائیاں
              پاؤں دھوئیں ۔ خصوصأ )
              ایڑیوں کو تیں بار
              دھوئیں ۔ اپنے تخنوں
              کو اچھی طرح صاف
              کریں اور پاؤں کی
 انگلیوں کا خلال کریں</Text>
            </View>

          </View>
          
          
          
          
        
         

     
        </SwiperFlatList>


      </View>
    )
  }




}


const styles = StyleSheet.create({
  container: {
    flex: 1

  },



  child: {
    height: height * 0.5,
    width,


  },
  text: {
    fontSize: width * 0.077,
    textAlign: 'right',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop:'10%'
  }, teext: {
    fontSize: width * 0.07,
    textAlign: 'center',

  }

})

export default Wazuu
