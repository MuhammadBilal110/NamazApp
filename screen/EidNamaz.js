import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button, Dimensions, Card, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Entypo  from 'react-native-vector-icons/Entypo'

let { height, width } = Dimensions.get('window')
class EidNamaz extends Component {

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
                        <Text style={{ color: '#fff', marginLeft: width * 0.27, fontSize: 20, fontWeight: 'bold' }}>Eid Namaz</Text>
                        <TouchableOpacity onPress={() =>    this.props.navigation.navigate('Home')} style={{ marginLeft: 90 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

                    </View>
                    
        <Image
          source={require('../Assets/eidd.jpg')}
          style={{
            width: '100%', height: '30%', marginTop: 0,
          }}
        />
        <SwiperFlatList  
        
        showPagination
        paginationActiveColor="green"
        paginationDefaultColor="green"
        paginationStyleItem={{width:10,height:10, marginLeft:-5, marginRight:-5}}
        
       
       
        
        >
          
           
          <View>

            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> نیت   </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                  بلند آواز سے کہنے کی ضرورت نہیں ہے، 
                لیکن آپ کو نماز کی رکعات اور رکعتوں
                
                 کی تعداد معلوم ہونی چاہیے  {"\n"} {"\n"} 
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
              <Text style={styles.teext}> پہلی تكبير 
                </Text>
            </View>
            <ScrollView   style={[styles.child]}>
            {/* <View style={[styles.child, { backgroundColor: '#f0f0f0' }]}> */}
              <Text style={styles.text}>
                نماز کی نیت کے بعد اپنے دونوں 
                باتوں کو کانوں تک اس طرح
               المائش کہ دونوں ہاتھوں کی
                تھیلیاں قبلہ کی طرف ہوں دونوں
                باتھوں کی انگلیاں نہ نیت ملی بوں
                اور نہ کھلی ہوئی ہوں ، بلکہ اصلی 
                حالت پر رہیں، اور تکبیر یعى اللهم
                اکبر کہہ کر ہاتھوں کو ناف کے نیچے
                باندھ لیں، داہنا ہاتھ اوپر أو ربائیاں 
                باتھ اس کے نیچی رلیے۔
                {"\n"} 
                 <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>
              {"\n"} {"\n"} <Text  style={{    fontWeight:'bold'}}> 'الله سب سے بڑا ہے'{"\n"}</Text>
                اپنی آنکھیں سجدے کی جگہ پر
                 رکھیں </Text>
            {/* </View> */}
            </ScrollView>
          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>   المياه </Text>
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

{"\n"}{"\n"}<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold' , marginLeft:10}}>سبحانك اللهم وبحمدك وتبارك اسمك وتعالى جدك ولا إله غيرك</Text>


{"\n"}{"\n"}<Text  style={{    fontWeight:'bold'}}>اے اللہ تیری ذات پاک خوبیوں
والى اورتیرا نام اور تیری شان
اونچے اور تیرے سوا کوئی معبود
نہیں' </Text></Text>
            </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تکبیر </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                پھر سے اپنے دونوں ہاتھوں کو کانوں
                  تک اس طرح اٹھائیں کہ دونوں
                  ہاتھوں کی ہتھیلیاں قبلہ کی طرف
                  ہوں اور اب کہیں
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے'
                 
                 {"\n"}اسے ۳ بار کریں</Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>     قیام </Text>
            </View>
          < ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                باندھیے کہ سیدھی ہتھیلی کی گڈی
الٹی ہتھیلی کے سرے پر اور بیچ کی
(تین انگلیاں الٹی کلائی کی پیٹھ پر 
  اور انگوٹھا اور چھوٹی انگلی کلائی کے اغل بغل
   {"\n"}
                  
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>بِسمِ اللہِ الرَّحمٰنِ الرَّحِيم</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے </Text>


                  پهر الحمد شریف پڑھیں{"\n"} 
<Text style={{fontSize:25 , color:'green' , marginLeft:'5%',   fontWeight:'bold'}}>{"\n"}ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ مَٰلِكِ يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ{"\n"} </Text>
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


{"\n"} {"\n"}  پھر سورۃ اخلاص پڑھیں {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>قُلۡ هُوَ اللّٰهُ اَحَدٌ‌ۚ‏  اللّٰهُ الصَّمَدُ‌ۚ‏  لَمۡ يَلِدۡ  وَلَمۡ يُوۡلَدۡۙ‏ وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ</Text>


 </Text>
 <Text  style={{    fontWeight:'bold'}}>{"\n"} کہو کہ وہ ذات پاک جس کانام
اللہ کے ایک معبود برحق جو

نیازہے نہ کسی کا باپ اورنہ
کسی کا بیٹا اور کوئی اس کا ہمسر
نہیں{"\n"}{"\n"} </Text>
<Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
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
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> {"\n"} 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
               
تھوڑا جھکیں یعنی اتنا کہ گھٹنوں
پر ہاتھ رکھ دیں زور نہ دیں اور
گھٹنوں کو نہ پکڑیں اور انگلیاں ملی
ہوئی اور پاؤں جھکے ہونٹ رکھیں
مردوں کی طرح خوب اسید ھنہ
کھیں. ایک بار جب آپ مناسب

زاویہ پر جھک گئے ہیں، (تین یا اس
سے زیادہ  بار کہیں {"\n"} {"\n"} {"\n"}
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الْعَظِيْمِ</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"} پاک میرا پروردگار عظمت والا {"\n"} {"\n"} </Text>
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

                 <Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} 'الله نے اس بندے کی بات سن لی
جس نے اسکی تعریف کی
'



{"\n"}{"\n"}     {"\n"}اسے ۳ بار کریں</Text>


اور پھر کھڑی حالت میں یہ بھی
                
                  {"\n"} 
                  (پڑھیں)
                  <Text style={{fontSize:3 , color:'green' ,    fontWeight:'bold'}}>{"\n"}رَبَّنَـا لَكَ الْحَمْدُ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"}{"\n"} اے ہمارے پروردگار تیرے لئے

تمام تعریف'</Text>
        


        <Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
        نوٹ: امام کے پیچھے جماعت سمیع
الله لمن حمیدہ نہیں پڑھ گے وہ
صرف ربنا لك الحمد کہیں گے {"\n"}  </Text></Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>پہلا سجده </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
اس کے بعد الله اکبر کہتے ہوئے سجدے میں جایئ بغیر ہاتھ اوپر
کیے
 
                <Text style={{fontSize:50 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}> {"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
               
پہلے دونوں گھٹنے زمین پر رکھیں
پھر دونوں ہاتھ زمین پر رکھیں
چہرہ دونوں ہتھیلیوں کے عین
بیچ میں ہو اور دونوں ہاتھوں کے
انگوٹھے کانوں کے برابر ہوں۔

انگلیاں ملی ہوئی ہوں اور سید ہ قبلے
کے رخ ہوں
 {"\n"} {"\n"}  {"\n"} {"\n"} {"\n"} 

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

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَارْزُقْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِي

 </Text> {"\n"} {"\n"}

 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ مجھے بخش دے مجھ پر
رحم فرما مجھے ہدایت دے میری

میرفرما مجھے رزق عطافرما میرے
نقصان کو پورا کردے اور مجھے
بلند مقام عطا فرما'
</Text> {"\n"} 
 

</Text> 

      
        
              </ScrollView>
              </View>


              
            
          
          







          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>دوسرا سجده۰

              
          </Text>
            </View>

          <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                دوسرے سجدے میں جاتے ہوئے
اللہ اکبر کہیں بغیر ہاتھ کھڑے کئے
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"}
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

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا {"\n"}{"\n"}</Text>
         </Text>
         
              </ScrollView>
              </View>


              <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}>    قیام</Text>
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
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>بِسمِ اللہِ الرَّحمٰنِ الرَّحِيم</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے </Text>


                 {"\n"} {"\n"}  پهر الحمد شریف پڑھیں{"\n"}{"\n"}
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>  {"\n"}ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ مَٰلِكِ يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ</Text>
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
انہیں {"\n"}{"\n"}</Text>
        </Text>
              </ScrollView>

          </View>


          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> تکبیر </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                پھر سے اپنے دونوں ہاتھوں کو کانوں
                  تک اس طرح اٹھائیں کہ دونوں
                  ہاتھوں کی ہتھیلیاں قبلہ کی طرف
                  ہوں اور اب کہیں
                
                  {"\n"} {"\n"} {"\n"}
                  <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text>

                 <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے'
                 
                 {"\n"}اسے ۳ بار کریں</Text>
        </Text>
              </ScrollView>

          </View>
          <View>
            <View style={{ backgroundColor: '#fffff' }}>
              <Text style={styles.teext}> رکوع   </Text>
            </View>
            <ScrollView   style={[styles.child]}>
                <Text style={styles.text}>
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> 
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

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"} پاک میرا پروردگار عظمت والا {"\n"}{"\n"}</Text>
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


اسے ۳ بار کریں {"\n"}</Text> اور پھر کھڑی حالت میں یہ بھی
                 (پڑھیں)
                  <Text style={{fontSize:50 , color:'green' ,    fontWeight:'bold'}}>{"\n"}رَبَّنَـا لَكَ الْحَمْدُ</Text>
<Text  style={{    fontWeight:'bold'}}>{"\n"} اے ہمارے پروردگار تیرے لئے

تمام تعریف'</Text>
        


        <Text  style={{  color :'red',  fontWeight:'bold'}}>{"\n"} 
        نوٹ: امام کے پیچھے جماعت سمیع
الله لمن حمیدہ نہیں پڑھ گے وہ
صرف ربنا لك الحمد کہیں گے {"\n"}{"\n"}</Text></Text>
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
 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}>{"\n"}'الله سب سے بڑا ہے' 
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
{"\n"} 
                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}> {"\n"} 'الله سب سے بڑا ہے' 
</Text> 
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}  اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَارْزُقْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِي

 </Text> {"\n"} {"\n"}

 <Text  style={{    fontWeight:'bold'}}>{"\n"} اے اللہ مجھے بخش دے مجھ پر
رحم فرما مجھے ہدایت دے میری

میرفرما مجھے رزق عطافرما میرے
نقصان کو پورا کردے اور مجھے
بلند مقام عطا فرما'
</Text> {"\n"} {"\n"} 
 

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
 
                <Text style={{fontSize:25, color:'green' ,    fontWeight:'bold'}}>{"\n"}الله أكبر</Text> 
                <Text  style={{    fontWeight:'bold'}}>{"\n"} 'الله سب سے بڑا ہے' 
</Text> {"\n"} 
               
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
{"\n"} {"\n"}  {"\n"} {"\n"} 


اپنے پاؤں ایسے رکھیں کہ دونوں

پاؤں کھڑے ہوں اور انکی انگلیاں

قبلے کی طرف ہوں
جب آپ پوری
جب آپ پوری طرح سے سجدے کی
حالت میں آجائیں تو تین یا اس سے

زیادہ طاق بار یہ پڑھیں
{"\n"} {"\n"} 
<Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text> {"\n"} 

      
        <Text  style={{    fontWeight:'bold'}}>{"\n"}پاک میرا پروردگار عالىَ شان  والا  {"\n"} {"\n"} </Text>
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
               
            

                <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>  {"\n"} 
اَلتَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِبَاتُ اَلسَّلاَمُ عَلَيْكَ اَيُّهَاالنَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ اَلسَّلاَمُ عَلَيْنَا وعَلَى عِبَادِ اللهِ الصَّالِحِيْنَ اَشْهَدُ اَنْ لاَّ اِلَهَ اِلاَّ اللَّهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ </Text> {"\n"} {"\n"} {"\n"}
              
               تمام زبان کی عبادتیں الله کے لئے ہیں
اور بدنی عبادتیں اور مالی عبادتیں
ر
بھی سلام ہو تم پر اے نبی اور اللہ کی

رحمت اور اسکی برکتیں سلامتی ہو
ہم {"\n"} {"\n"}  پر اور اللہ کے نیک بندوں پر میں
گواہی دیتا دیتی ہوں کہ     الله کے سوا

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


                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}> اللَّهُـمّ صَــــــلٌ علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما صَــــــلٌيت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥
اللهم بارك علَےَ مُحمَّــــــــدْ و علَےَ آل مُحمَّــــــــدْ كما باركت علَےَ إِبْرَاهِيمَ و علَےَ آل إِبْرَاهِيمَ إِنَّك حَمِيدٌ مَجِيدٌ♥


 </Text> {"\n"} {"\n"}

 
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
             


          

                
                            <Text style={{fontSize:25 , color:'green' ,    fontWeight:'bold'}}>{"\n"}السَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ
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

export default EidNamaz