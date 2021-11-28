import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, ScrollView, Button, Dimensions  ,BackHandler} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Wazuu from './Wazuu'
import SwiperFlatList from 'react-native-swiper-flatlist';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

// let firstImage
// let secondImage
// let thirdImage
let { height, width } = Dimensions.get('window')


export default class FeMale extends Component {

  
  state = {
    index: 0,
   
  }
  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
    
  }
  backAction = () => {
    this.props.navigation.navigate('Namaz')
    return true
  }

  render() {
 
//     let array = ['Step:1  :  Raise your hands to your ears and say "Allahu Akbar" (الله أكبر)', ' Eyes Look to The place of Prostration'   + '\n' + 'Your face should be on qibla ', 'This Is wrong Method .Your hand are not on he ears', 'Step: 2  : Lower your hands and place them over your naval. Your right hand should be placed over your left hand '+ '\n' + '\n'+' Keep your eyes focused on the ground in front of you',
//       '  سبحانك اللهم و بحمدك،  وتبارك اسمك، و تعالى جدك، ولا إله غيرك  '+ '\n'  +' Then recite silently  :   First chapter of the Qur’an is called Surah Fatihah  And Then Recite A Short Surah' , 'This Is wrong Method .Your hand are not folled Peroperly ', 'Step: 3  ---   Now bow down saying: "Allahu Akbar" and place your hands on your knees and say silently: "Subhana Rabbiyal Adhim. (سُبْحَانَ رَبِّيَ الْعَظِيمِ)" ' , 'This Is wrong Method .Your hand are not  placed on Your Knee. ', 'Step --4 Stand up from the bowing position saying: "Sami Allahu liman hamidah" (Allah hears those who praise Him) "Rabbana lakal hamd."',
//     'Step :5 Prostrate on the floor saying:  "Allahu Akbar" with your forehead, nose, palms of both hands, your knees, and toes all touching the floor. Then recite silently: "Subhana Rabbiyal Ala." سُبْحَانَ رَبِّيَ الأَعْلَى' ,' This Is wrong Method .Your Foot are Not touching on the floor . ' ,'This Is wrong Method .Your Nose and Head are Not touching on the floor.',
//     '  Sit up from the floor saying Allahu Akbar. Sit upright with your knees bent and palms placed on them and say: “Rabbighfir li. (رب اغفر لي)”' ,
//     'Your  are not sit in proper Position you  not legs have equal distance.'  , '  After the second Sujood  (prostration) you sit on the left leg while keeping the right foot upright and put your right hand on the right thigh, with all fingers together in a fist except the index finger. Stick the index finger straight out. Put your left hand on the left thigh. ',   
//     'Now recite Tashahhud silently: التحيات لله  والصلوات  والطيبات، السلام عليك أيها النبي  ورحمة لله وبركاته، السلام علينا و على عباد الله الصالحين، أشهد أن لا إله إلا الله، وأشهد أن محمدا عبده و رسوله' ,
//     'This Method Is Wrong Because your with all fingers together in a fist except the index finger' , 
//     'اللهم صل على محمد وعلى آل محمد، كما صليت على إبراهيم وعلى آل إبراهيم، وبارك على محمد وعلى آل محمد، كما باركت على إبراهيم وعلى آل إبراهيم، في العالمين إنك حميد مجيد'  , 'Now turn your face to the right saying: "Assalamu alaikum wa rahmatullah" (peace and the mercy of Allah be on you) and then to the left repeating the same words.'
// ]
//     console.log('this.props.navigation.navigate', this.props)
    return (
      <>

        <View style={styles.container}>
<View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Namaz')} style={{ marginLeft: 10 }}><Ionicons name={'md-arrow-back-outline'} size={25} color={'#fff'} /></TouchableOpacity>
          <Text style={{ color: '#fff', marginLeft: width * 0.35, fontSize: 20, fontWeight: 'bold' }}>Male</Text>
          <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ alignContent:'flex-end' , alignItems:'flex-end' , marginLeft:120 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

        </View>
          <Image
            source={require('../Assets/Namazmad.jpg')}
            style={{ width: '100%', height: '30%', }}


          />
           {/* <ImageSlider
           
            

            images={[
              require("../Assets/ta.jpg"),
              require("../Assets/tc.jpg"),
              require("../Assets/tb.jpg"),
              require("../Assets/t2a.jpg"),
              require("../Assets/t2a.jpg"),
              require("../Assets/t2b.jpg"),
              require("../Assets/t3a.jpg"),
              require("../Assets/t3b.jpg"),
              require("../Assets/t4a.jpg"),
              require("../Assets/t5a.jpg"),
              require("../Assets/t5b.jpg"),
              require("../Assets/t5c.jpg"),
              require("../Assets/t6a.jpg"),
              require("../Assets/t6b.jpg"),
              require("../Assets/t8a.jpg"),
              require("../Assets/t8a.jpg"),
              require("../Assets/t8b.jpg"),
              require("../Assets/t8a.jpg"),
              require("../Assets/t9a.jpg"),
              

            ]

            }
            onPositionChanged={(index) => {

              this.setState({ index })
            }}

            onPress={({ index }) => alert(index)}


            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={item} style={styles.customImage} />
                 <Text style={{fontSize:17 , justifyContent : 'center'}}> {array[this.state.index]}</Text>
             </View> 
            )}
          /> */}
          
          <SwiperFlatList  
          showPagination
          paginationActiveColor="green"
          paginationDefaultColor="green"
          paginationStyleItem={{width:10,height:10, marginLeft:-5, marginRight:-5}}
           
   

          >
           <View>

<View style={{ backgroundColor: '#fffff' }}>
  <Text style={styles.teext}> نیت  </Text>
</View>
<ScrollView showPagination   style={[styles.child]}>


    <Text style={styles.text}>

    وضو کے بعد ، قبلے کی طرف رخ کریں اور
سیدھے کھڑے ہو جائیں ایسے کہ آپ کے
پاؤں کے درمیان کم از کم چار انگلیوں کا
فاصلہ ہو، اپنی آنکھیں سجدے کی جگہ
پررکھیں۔
{"\n"}
      بلند آواز سے کہنے کی ضرورت نہیں ہے، 
    لیکن آپ کو نماز کی رکعات اور رکعتوں
    
     کی تعداد معلوم ہونی چاہیے  {"\n"} 
      <Text style={{fontSize:20  }}  > اس کی ایک مثال یہ ہے کہ {"\n"}{"\n"}</Text> 
    <Text style={{  fontSize:25 }}  >
    میں خود کو اللہ ک سامنے پیش کرتاہوں
    عید کی نماز دو رکعات پڑھنے کیلئے
اللہ کے لئے کعبہ رخ ہوکر'</Text>
</Text>
  </ScrollView>
</View>




<View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تكبير 
                </Text>
            </View>
            
            <ScrollView   style={[styles.child]}>
            {/* <View style={[styles.child, { backgroundColor: '#f0f0f0' }]}> */}
              <Text style={styles.text}>
                نماز کی نیت کے بعد اپنے دونوں 
                باتوں کو کانوں تک اس طرح
               المائش کہ دونوں ہاتھوں کی
                تھیلیاں قبلہ کی طرف ہوں دونوں 
                باتھوں کی انگلیاں نہ نیت ملی باتوں
                اور نہ کھلی ہوئی ہوں ، بلکہ اصلی 
                حالت پر رہیں، اور تکبیر یعى الله
                اکبر کہہ کر ہاتھوں کو ناف کے نیچے
                باندھ لیں، داہنا ہاتھ اوپر أو ربائیاں 
                باتھ اس کے نیچی رلیے۔
                {"\n"} {"\n"}
                 <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>
              {"\n"} {"\n"} <Text  style={{    fontWeight:'bold'}}> 'الله سب سے بڑا ہے'{"\n"}</Text>
                اپنی آنکھیں سجدے کی جگہ پر
                 رکھیں </Text>
            {/* </View> */}
            </ScrollView>
          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>   قیام</Text>
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

{"\n"}<Text style={{fontSize:25 , color:'green' ,  marginLeft:'5%',  fontWeight:'bold'}}>(سبحانك اللهم وبحمدك وتبارك اسمك وتعالى جدك ولا إله غيرك)</Text>


{"\n"}{"\n"}<Text  style={{    fontWeight:'bold'}}>اے اللہ تیری ذات پاک خوبیوں
والى اورتیرا نام اور تیری شان
اونچے اور تیرے سوا کوئی معبود
نہیں' {"\n"}</Text>


<Text style={{fontSize:20 , color:'green' ,    fontWeight:'bold' , marginLeft:'5%'}}>بِسمِ اللہِ الرَّحمٰنِ الرَّحِيم</Text>

<Text  style={{    fontWeight:'bold'}}>{"\n"}شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے</Text>


{"\n"} {"\n"}  پهر الحمد شریف پڑھیں{"\n"} {"\n"}
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ مَٰلِكِ يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} سب طرح کی تعریف خدا ہی کو 
سزاوار ہے جو تمام مخلوقات کا
پروردگار سے بڑا مہربان نہایت رحم
والا انصاف کے دن کا حاکم (اے
پروردگار ہم تیری ہی عبادت کر
ہیں اور تجھ ہی سے مدد مانگتے ہیں

ہم کو سیدھے رستے چلا ان لوگوں کے

رستے جن پرتواپنا فضل و کرم کرتا
رہانہ ان کے جن پر غصے ہوتا رہا اور
نہ گمراہوں کے'


{"\n"} {"\n"}  پھر سورۃ اخلاص پڑھیں {"\n"} {"\n"}
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>قُلۡ هُوَ اللّٰهُ اَحَدٌ‌ۚ‏  اللّٰهُ الصَّمَدُ‌ۚ‏  لَمۡ يَلِدۡ  وَلَمۡ يُوۡلَدۡۙ‏ وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ</Text>


</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} کہو کہ وہ ذات پاک جس کانام
اللہ کے ایک معبود برحق جو

نیازہے نہ کسی کا باپ اورنہ
کسی کا بیٹا اور کوئی اس کا ہمسر
 نہیں کہو کہ وہ ذات پاک جس کانام{"\n"}{"\n"} </Text>
<Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
نوٹ: اگر آپ اکیلے نماز پڑھ رہیں
ہیں تو سورة اخلاص یا کوئی اور
سورة لازمی ہے
انہیں {"\n"}{"\n"}{"\n"}{"\n"}</Text></Text>

            </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> رکوع  </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
               
تھوڑا جھکیں یعنی اتنا کہ گھٹنوں
پر ہاتھ رکھ دیں زور نہ دیں اور
گھٹنوں کو نہ پکڑیں اور انگلیاں ملی
ہوئی اور پاؤں جھکے ہونٹ رکھیں
مردوں کی طرح خوب اسید ھنہ
کھیں. ایک بار جب آپ مناسب

زاویہ پر جھک گئے ہیں، تین یا اس
سے زیادہ  بار کہیں {"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الْعَظِيْمِ</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"} پاک میرا پروردگار عظمت والا </Text>
         </Text>
              </ScrollView>

          </View>

          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> قومہ 
   </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                رکوع سے اٹھیں ، اوربلکل سید ھے
                کھڑے ہو جایئں کھڑے ہوتے ہوئے     (پڑھیں)

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}سمع الله لمن حمده</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"}الله نے اس بندے کی بات سن لی
جس نے اسکی تعریف کی
'



    {"\n"}اسے ۳ بار کریں{"\n"}</Text>


اور پھر کھڑی حالت میں یہ بھی
                
                  (پڑھیں)
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"} رَبَّنَـا لَكَ الْحَمْدُ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} اے ہمارے پروردگار تیرے لئے

تمام تعریف'</Text>
        


        <Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
        نوٹ: امام کے پیچھے جماعت سمیع
الله لمن حمیدہ نہیں پڑھ گے وہ
صرف ربنا لك الحمد کہیں گے </Text></Text>
              </ScrollView>
            </View>


<View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>پہلا سجده</Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                اس کے بعد الله اکبر کہتے ہوئے
سجدے میں جایئ بغیر ہاتھ اوپر
کیے
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}> 'الله سب سے بڑا ہے' 
</Text> {"\n"}
               
پہلے دونوں گھٹنے زمین پر رکھیں
پھر دونوں ہاتھ زمین پر رکھیں
چہرہ دونوں ہتھیلیوں کے عین
بیچ میں ہو اور دونوں ہاتھوں کے
انگوٹھے کانوں کے برابر ہوں۔

انگلیاں ملی ہوئی ہوں اور سید ہ قبلے
کے رخ ہوں
 {"\n"} {"\n"}

 پھر دونوں ہاتھوں کے بیچ میں پہلے 
تاک پھر پیشانی زمین پر رکھیں
کوہنیاں پسلیوں سے اور رانیں پیٹ
سے الگ رہیں ، نیز کوہنیاں کھڑی )
رہیں زمین سے نہ لگیں
{"\n"} {"\n"} 


اپنے پاؤں ایسے رکھیں کہ دونوں

پاؤں کھڑے ہوں اور انکی انگلیاں

قبلے کی طرف ہوں
جب آپ پوری
جب آپ پوری طرح سے سجدے کی
حالت میں آجائیں تو تین یا اس سے

زیادہ طاق بار یہ پڑھیں
{"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا {"\n"} {"\n"} </Text>
         </Text>
              </ScrollView>
             

          </View>
          <View>
          <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>جلسہ 
              
          </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                پھر سیدها قدم کھڑا کرکے اسکی
انگلیاں قبلہ رخ کر دیجیے اور الثا
قدم بچھا کر اس پر خوب سید ھ 
بیٹھ جایئں سجدے سے اس طرح
الهیں کہ ، پہلے پیشانی پھر ناک پھر
               
               
           {"\n"}ہاتھ اٹھیں {"\n"}


           
ہتھیلیاں بچھا کر رانوں پر گھٹنوں

کے پاس رکھئیے کہ دونوں ہاتھوں کی
انگلیاں قبلے کی جانب اور انگلیوں کے 
سے گھٹنوں کے پاس ہوں جلسہ کی

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَارْزُقْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِي

 </Text> {"\n"} {"\n"}

 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ مجھے بخش دے مجھ پر
رحم فرما مجھے ہدایت دے میری

میرفرما مجھے رزق عطافرما میرے
نقصان کو پورا کردے اور مجھے
بلند مقام عطا فرما' {"\n"} {"\n"} 
</Text> 

</Text> 

      
        
              </ScrollView>
              </View>

              <View>
              <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>دوسرا سجده 
              
          </Text>
            </View>

          <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                دوسرے سجدے میں جاتے ہوئے
اللہ اکبر کہیں بغیر ہاتھ کھڑے کئے
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>'الله سب سے بڑا ہے' {"\n"} 
</Text> 
پہلے دونوں گھٹنے زمین پر رکھیں
پھر دونوں ہاتھ زمین پر رکھیں
چہرہ دونوں ہتھیلیوں کے عین
بیچ میں ہو اور دونوں ہاتھوں کے
انگوٹھے کھانوں کے برابر ہوں،
انگلیاں ملی ہوئی ہوں اور سید ھ قبلے
کے رخ ہوں
{"\n"} 
پھر دونوں ہاتھوں کے بیچ میں پہلے
ناک پھر پیشانی زمین پر رکھیں )
کوہنیاں پسلیوں سے اور رانیں پیٹ
سے الگ رہیں، نیز کوہنیاں کھڑی
رہیں زمین سے نہ لگیں
اپنے پاؤں ایسے رکھیں کہ دونوں
پاؤں کھڑے ہوں اور انکی انگلیاں
 قبلے کی طرف ہوں
 {"\n"} {"\n"}
جب آپ پوری طرح سے سجدے کی
حالت میں آجائیں تو تین یا اس سے

زیادہ طاق بار یہ پڑھیں
{"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا {"\n"} {"\n"} </Text>
         </Text>
         
              </ScrollView>
              </View>
              <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>     قیام </Text>
            </View>
          < ScrollView   style={[styles.child]}>
                <Text style={styles.text}> سجدے سے اٹھ کر اپنے ہاتھ گھٹنوں
پر رکھ کر سیدھے کھڑے ہو جایئ
اٹھتے وقت زمین پر ہاتھ اٹیکیں 
دوسرے سجدے سے کھڑے ہوتے
ہوئے بغیر ہاتھ کھڑے کیے کہیں

                باندھیے کہ سیدھی ہتھیلی کی گڈی 
الٹی ہتھیلی کے سرے پر اور بیچ کی
(تین انگلیاں الٹی کلائی کی پیٹھ پر 
  اور انگوٹھا اور چھوٹی انگلی کلائی کے اغل بغل
   {"\n"}
                  {"\n"} 
                  <Text style={{fontSize:25 , color:'green' ,  marginLeft:'5%',  fontWeight:'bold'}}>بِسمِ اللہِ الرَّحمٰنِ الرَّحِيم</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے </Text>


                 {"\n"} {"\n"}  پهر الحمد شریف پڑھیں
<Text style={{fontSize:20 , color:'green' ,    fontWeight:'bold'}}>{"\n"}ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ مَٰلِكِ {"\n"} {"\n"}  يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"} سب طرح کی تعریف خدا ہی کو 
سزاوار ہے جو تمام مخلوقات کا
پروردگار سے بڑا مہربان نہایت رحم
والا انصاف کے دن کا حاکم (اے
پروردگار ہم تیری ہی عبادت کر
ہیں اور تجھ ہی سے مدد مانگتے ہیں

ہم کو سیدھے رستے چلا ان لوگوں کے

رستے جن پرتواپنا فضل و کرم کرتا
رہانہ ان کے جن پر غصے ہوتا رہا اور
نہ گمراہوں کے'


{"\n"} {"\n"}  پھر سورۃ اخلاص پڑھیں {"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>قُلۡ هُوَ اللّٰهُ اَحَدٌ‌ۚ‏  اللّٰهُ الصَّمَدُ‌ۚ‏  لَمۡ يَلِدۡ  وَلَمۡ يُوۡلَدۡۙ‏ وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ</Text>


 </Text>
 <Text  style={{    fontWeight:'bold'}}>{"\n"} کہو کہ وہ ذات پاک جس کانام
اللہ کے ایک معبود برحق جو

نیازہے نہ کسی کا باپ اورنہ
کسی کا بیٹا اور کوئی اس کا ہمسر
نہیں{"\n"}{"\n"} </Text>
<Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} کہو کہ وہ ذات پاک جس کانام
نوٹ: اگر آپ اکیلے نماز پڑھ رہیں
ہیں تو سورة اخلاص یا کوئی اور
سورة لازمی ہے
انہیں {"\n"} {"\n"} </Text>
        </Text>
              </ScrollView>

          </View>



           <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> رکوع </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                <Text style={{fontSize:30 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"}
               
تھوڑا جھکیں یعنی اتنا کہ گھٹنوں
پر ہاتھ رکھ دیں زور نہ دیں اور
گھٹنوں کو نہ پکڑیں اور انگلیاں ملی
ہوئی اور پاؤں جھکے ہونٹ رکھیں
مردوں کی طرح خوب اسید ھنہ
کھیں. ایک بار جب آپ مناسب

زاویہ پر جھک گئے ہیں، تین یا اس
سے زیادہ  بار کہیں {"\n"} {"\n"} {"\n"}
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الْعَظِيْمِ</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"} پاک میرا پروردگار عظمت والا </Text>
         </Text>
              </ScrollView>

          </View>
          <View>
          <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> قومہ 
   </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                رکوع سے اٹھیں ، اوربلکل سید ھے
                کھڑے ہو جایئں (کھڑے ہوتے ہوئے   
                
             
                  (پڑھیں)

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> {"\n"}سمع الله لمن حمده</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله نے اس بندے کی بات سن لی
جس نے اسکی تعریف کی
'



{"\n"}اسے ۳ بار کریں{"\n"}</Text>

اور پھر کھڑی حالت میں یہ بھی
                
              
                  (پڑھیں)
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"} رَبَّنَـا لَكَ الْحَمْدُ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} اے ہمارے پروردگار تیرے لئے

تمام تعریف'</Text>
        


        <Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
        نوٹ: امام کے پیچھے جماعت سمیع
الله لمن حمیدہ نہیں پڑھ گے وہ
 صرف ربنا لك الحمد کہیں گے {"\n"}</Text></Text>
              </ScrollView>
            </View>
          
              <View>
              <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>پہلا سجده </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                اس کے بعد الله اکبر کہتے ہوئے
سجدے میں جایئ بغیر ہاتھ اوپر
کیے
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
               
پہلے دونوں گھٹنے زمین پر رکھیں
پھر دونوں ہاتھ زمین پر رکھیں
چہرہ دونوں ہتھیلیوں کے عین
بیچ میں ہو اور دونوں ہاتھوں کے
انگوٹھے کانوں کے برابر ہوں۔

انگلیاں ملی ہوئی ہوں اور سید ہ قبلے
کے رخ ہوں
 {"\n"} 

 پھر دونوں ہاتھوں کے بیچ میں پہلے 
تاک پھر پیشانی زمین پر رکھیں
کوہنیاں پسلیوں سے اور رانیں پیٹ
سے الگ رہیں ، نیز کوہنیاں کھڑی )
رہیں زمین سے نہ لگیں
{"\n"} {"\n"} 


اپنے پاؤں ایسے رکھیں کہ دونوں

پاؤں کھڑے ہوں اور انکی انگلیاں

قبلے کی طرف ہوں
جب آپ پوری
جب آپ پوری طرح سے سجدے کی
حالت میں آجائیں تو تین یا اس سے

زیادہ طاق بار یہ پڑھیں
{"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا {"\n"}{"\n"}</Text>
         </Text>
              </ScrollView>
              </View>

              <View>
          <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>جلسہ 
              
          </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                پھر سیدها قدم کھڑا کرکے اسکی
انگلیاں قبلہ رخ کر دیجیے اور الثا
قدم بچھا کر اس پر خوب سید ھ 
بیٹھ جایئں سجدے سے اس طرح
الهیں کہ ، پہلے پیشانی پھر ناک پھر
               
               
           {"\n"}ہاتھ اٹھیں {"\n"}


           
ہتھیلیاں بچھا کر رانوں پر گھٹنوں

کے پاس رکھئیے کہ دونوں ہاتھوں کی
انگلیاں قبلے کی جانب اور انگلیوں کے 
سے گھٹنوں کے پاس ہوں جلسہ کی

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَارْزُقْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِي

 </Text> {"\n"} 

 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ مجھے بخش دے مجھ پر
رحم فرما مجھے ہدایت دے میری

میرفرما مجھے رزق عطافرما میرے
نقصان کو پورا کردے اور مجھے
بلند مقام عطا فرما'
{"\n"} {"\n"} </Text> 

</Text> 

      
        
              </ScrollView>
              </View>

              <View>
              <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>دوسرا سجده               
          </Text>
            </View>

          <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                دوسرے سجدے میں جاتے ہوئے
اللہ اکبر کہیں بغیر ہاتھ کھڑے کئے
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"}
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> 
پہلے دونوں گھٹنے زمین پر رکھیں
پھر دونوں ہاتھ زمین پر رکھیں
چہرہ دونوں ہتھیلیوں کے عین
بیچ میں ہو اور دونوں ہاتھوں کے
انگوٹھے کھانوں کے برابر ہوں،
انگلیاں ملی ہوئی ہوں اور سید ھ قبلے
کے رخ ہوں
{"\n"} 
پھر دونوں ہاتھوں کے بیچ میں پہلے
ناک پھر پیشانی زمین پر رکھیں )
کوہنیاں پسلیوں سے اور رانیں پیٹ
سے الگ رہیں، نیز کوہنیاں کھڑی
رہیں زمین سے نہ لگیں
اپنے پاؤں ایسے رکھیں کہ دونوں
پاؤں کھڑے ہوں اور انکی انگلیاں
 قبلے کی طرف ہوں
 {"\n"} {"\n"}
جب آپ پوری طرح سے سجدے کی
حالت میں آجائیں تو تین یا اس سے

زیادہ طاق بار یہ پڑھیں
{"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا {"\n"} {"\n"} </Text>
         </Text>
         
              </ScrollView>
              </View>



              <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>تشہد
              
          </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                دوسرے سجدے سے اٹھتے وقت الله
اکبر کہیں. جلسے کی حالت میں
(صحیح طریقے سے بیٹھ جایٹ جیسا 
کہ جلسہ کا طریقہ بتایا گیاہے اوریہ
پڑھیں
               
            

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> 
                {"\n"}اَلتَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِبَاتُ اَلسَّلاَمُ عَلَيْكَ اَيُّهَاالنَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ اَلسَّلاَمُ عَلَيْنَا وعَلَى عِبَادِ اللهِ الصَّالِحِيْنَ اَشْهَدُ اَنْ لاَّ اِلَهَ اِلاَّ اللَّهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ{"\n"}</Text> 
               
               
               تمام زبان کی عبادتیں الله کے لئے ہیں
اور بدنی عبادتیں اور مالی عبادتیں

بھی سلام ہو   تم پر اے نبی  {"\n"} {"\n"}اور اللہ کی

 رحمت اور اسکی برکتیں سلامتی ہو
ہم پر اور اللہ کے نیک بندوں پر میں
گواہی دیتا دیتی ہوں کہ الله کے سوا

کوئی معبود نہیں اور میں گواہی دیتا
ہوں کہ حضرت محمد اسکے بند ھے
اور اسکے پیغمبر ہیں
جب تشہد میں لا کے قریب پہنچیں
تو سیدھے ہاتھ کی بیچ کی انگلی اور
انگوٹھے کا حلقہ بنالیجئے اور چھوٹی
انگلی اور اسکی برابر والی انگلی کو
(
ہتھیلی سے ملا دیجئے اور اشهد الله
کے فورا بعد لفظلا کہتے ہی شہادت کی
دانگل انهایشم
انگلی اٹھایئں مگر اسکو ادهر ادهرنا

ہلایئ اور لفظ الاير گرا دیجیئے اور
فوراسب انگلیاں سیدھی کرلیجیئے


تشہل کے بعد اگریہ آخری رکعات
ہو تو اس کے بعد درود شریف پڑھنا


                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اللَّهُـمّ صَــــــلٌ علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما صَــــــلٌيت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥{"\n"}
اللهم بارك علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما باركت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥


 </Text> {"\n"} 

 
 اے اللہ حضرت محمد پر اور
حضرت محمد کی آل پر رحمت
بهيج جس طرح تو نے رحمت بھیجی
حضرت ابرائیور پر اور حضرت
| ابراہیم کی آل پر بیشک تو تعریف
کیا گیا ہے بزرگ ہے. اے اللہ برکت
ہے حضرت محمد کو اور حضرت

محمد کی آل کو جس طرح تونے
برکت دی حضرت ابراٹيم کو اور

حضرت ابراہیم کی آل کو بیشک تو
تعریف کیا گیا ہے بزرگ ہے
{"\n"} {"\n"}

 

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
             


        
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}السَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ
 </Text> {"\n"} 

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
             


          

                
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>  السَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ
 </Text> {"\n"} 

 <Text  style={{    fontWeight:'bold'}}>{"\n"} تم پر سلامتی اور اللہ کی رحمت
نازل ہو
</Text> {"\n"} 
 

</Text> 

      
        
              </ScrollView>
              </View>
          

       


          
          

</SwiperFlatList>

           
          
          </View>
          </>
    )
        }
    }
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
    
  
    },
  
  
    customSlide: {
      backgroundColor: 'white',
      
  
    },
    customImage: {
      width: '100%',
      height: '50%',
      resizeMode: 'contain',
      
     

  
  
  
    },
    child: {
      height: height * 0.7,
      width,
      paddingRight:1
     
    },
    text: {
      fontSize: width * 0.05,
      textAlign: 'right',
      marginRight: '6%',
      marginLeft: '4%',
      marginTop: '4%',
   
    }, teext: {
      fontSize: width * 0.08,
      textAlign: 'center'
    },
  
  })