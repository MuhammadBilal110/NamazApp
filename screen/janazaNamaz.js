import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button, Dimensions, Card, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Entypo  from 'react-native-vector-icons/Entypo'

let { height, width } = Dimensions.get('window')
class Janazanamaz extends Component {
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
  render() {
    return (
        <View style={styles.container}>
          <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('More')} style={{ marginLeft: 10 }}><Ionicons name={'md-arrow-back-outline'} size={25} color={'#fff'} /></TouchableOpacity>
                        <Text style={{ color: '#fff', marginLeft: width * 0.24, fontSize: 20, fontWeight: 'bold' }}>Namaz Janaza</Text>
                        <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 70 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

                    </View>
        <Image
          source={require('../Assets/Janazaa1.jpg')}
          style={{
            width: '100%', height: '30%', marginTop: 0,
          }}
        />
       <SwiperFlatList 
       showPagination
       paginationActiveColor="green"
       paginationDefaultColor="green"
        paginationStyleItem={{width:10,height:10, marginLeft:0, marginRight:-10}}
        ref={ref => {
          this.list_ref = ref;

        }}
       >

<View>

<View style={{ backgroundColor: '#fffff' }}>
  <Text style={styles.teext}> نیت   </Text>
</View>
<ScrollView   style={[styles.child]}>
    <Text style={styles.text}>
    وضو کے بعد ، قبلے کی طرف رخ کریں اور
سیدھے کھڑے ہو جائیں ایسے کہ آپ کے
پاؤں کے درمیان کم از کم چار انگلیوں کا
فاصلہ ہو، اپنی آنکھیں سجدے کی جگہ
پررکھیں۔  {"\n"} {"\n"} 


 بلند آواز سے کہنے کی ضرورت نہیں ہے
لیکن آپ کو نماز کی رکعات اور رکعاتوں
کی تعداد معلوم ہونی چاہیے..

      <Text style={{fontSize:20  }}  >{"\n"}اس کی ایک مثال یہ ہے کہ {"\n"}</Text> 
    <Text style={{  fontSize:20 }}  >
    {"\n"} میں خود کو اللہ ک سامنے پیش کرتاہوں
    عید کی نماز دو رکعات پڑھنے کیلئے
اللہ کے لئے کعبہ رخ ہوکر'</Text>

{"\n"} {"\n"} {"\n"} {"\n"} 



جنازه امام کے سامنے رکھ دیا جاتا ہے ایک
سے زائد جنازہ ہو تو ان کو آمنے سامنے رکھ
دیں. اگر جنازه مرد کا ہو تو امام سینے کی
سیدھ میں کھڑا ہوا اور اگر اگر جنازه
عورت کا ہو تو امام کمر کی سیدھ میں
کھڑا ہو گا
{"\n"} {"\n"} </Text>
  </ScrollView>
</View>

<View>
          <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>  پہلی  تكبير 
                </Text>
            </View>
            <ScrollView   style={[styles.child]}>
            
              <Text style={styles.text}>
                نماز کی نیت کے بعد اپنے دونوں 
                باتوں کو کانوں تک اس طرح
               المائش کہ دونوں ہاتھوں کیا
                تھیلیاں قبلہ کی طرف ہوں دونوں 
                باتھوں کی انگلیاں نہ نیت ملی بوں 
                اور نہ کھلی ہوئی ہوں ، بلکہ اصلی 
                حالت پر رہیں، اور تکبیر یعى اللهِ
                اکبر کہہ کر ہاتھوں کو ناف کے نیچے
                باندھ لیں، داہنا ہاتھ اوپر أو ربائیاں )
                باتھ اس کے نیچی رلیے۔
                {"\n"} 
                 <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>
              {"\n"}  <Text  style={{    fontWeight:'bold'}}> 'الله سب سے بڑا ہے'{"\n"}</Text>
                اپنی آنکھیں سجدے کی جگہ پر
                 رکھیں {"\n"}{"\n"}</Text>
         
            </ScrollView>
          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>   ثناء</Text>
            </View>
            <ScrollView   style={[styles.child]}>
              <Text style={styles.text}>
اپنا ہاتھ ناف کے نیچے اس طرح
باند هیں کہ سیدهی بتنبیلی کی گئی
 الثي بتھیلی کے سرے پر اور بیچ کی 
تین انگلیاں الٹی کلائی کی پیٹھ پر
اور انگوٹھا اورچھوتی انگلی کلائی
کے اغل بغل  
پیر ثناء پڑھیں

{"\n"}{"\n"}<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>(سبحانك اللهم وبحمدك وتبارك اسمك وتعالى جدك ولا إله غيرك)</Text>


{"\n"}{"\n"}<Text  style={{    fontWeight:'bold'}}>اے اللہ تیری ذات پاک خوبیوں
والى اورتیرا نام اور تیری شان
اونچے اور تیرے سوا کوئی معبود
نہیں' </Text></Text>
            </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تکبیر  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
     بغیر ہاتھ 
                   اٹھائیں 
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے'
                 
                 </Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>   درود  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                اب درود پڑھیں  
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:20 , color:'green' ,    fontWeight:'bold'}}> اللَّهُـمّ صَــــــلٌ علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما صَــــــلٌيت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥
اللهم بارك علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما باركت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥


 </Text> {"\n"} {"\n"}
                 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ حضرت محمد پر اور
حضرت محمد کی آل پر رحمت
بهيج جس طرح تو نے رحمت بھیجی
حضرت ابرائیور پر اور حضرت
| ابراہیم کی آل پر بیشک تو تعریف
کیا گیا ہے بزرگ ہے. اے اللہ برکت
ہے حضرت محمد کو اور حضرت

محمد کی آل کو جس  {"\n"} {"\n"} طرح  تونے
برکت دی حضرت ابراٹيم کو اور

حضرت ابراہیم کی آل کو بیشک تو
تعریف کیا گیا ہے بزرگ ہے
{"\n"} {"\n"}</Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تکبیر  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
     بغیر ہاتھ 
                   اٹھائیں 
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے'
                 
                 </Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> دعا  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                تکبیر کے بعد یہ دعا پڑھیں
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا اللَّهُمَّ مَنْ أَحْيَيْته مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ وَمَنْ تَوَفَّيْته مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ
</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ بخش دے ہمارے ہر
زنده کواورہمارے ہرمتونی کو اور
ہمارے ہر حاضر کو اور ہمارے ہر
غائب کو اور ہمارے ہر چھوڑ کر

اور ہمارے ہربڑے کو اور ہمارے
ہر مرد کو اور ہماری ہر عورت کواے
اللہ تو ہم میں سے جس کو زندہ رکھے
تو اس کو اسلام  {"\n"} {"\n"} پہ زندہ رکھ اورہم
میں سے چسکو موت دے تو اس کو
 ایمان پر موت ہے {"\n"} {"\n"} </Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تکبیر  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
     بغیر ہاتھ 
                   اٹھائیں 
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25, color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے'
                 
                 </Text>
        </Text>
              </ScrollView>

          </View>




        

        

         
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>سلام 

              
          </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
دعا پڑھنے کے بعد ، دائیں کندھے کی
طرف منہ کر کے کہیں
             
{"\n"} {"\n"}

        
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>السَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ
 </Text> {"\n"} {"\n"}

 <Text  style={{    fontWeight:'bold'}}>{"\n"} تم پر سلامتی اور اللہ کی رحمت
نازل ہو
</Text> {"\n"} 
 

</Text> 

      
        
              </ScrollView>
              </View>

         

      
          
         
        
        
              <View>
              <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>سلام 

              
          </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>پھر بائیں کندھے کی طرف منہ کرکے
کہیں
             
{"\n"} {"\n"}

          

                
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>السَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ
 </Text> {"\n"} {"\n"}

 <Text  style={{    fontWeight:'bold'}}>{"\n"} تم پر سلامتی اور اللہ کی رحمت
نازل ہو
</Text> {"\n"} 
 

</Text> 

      
        
              </ScrollView>
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
      height: height * 0.2,
      width,
      paddingRight:1
     
    },
    text: {
      fontSize: width * 0.05,
      textAlign: 'right',
      marginRight: '6%',
      marginTop: '2%',
   
    }, teext: {
      fontSize: width * 0.08,
      textAlign: 'center'
    },
  
     
    
  
  })

export default Janazanamaz