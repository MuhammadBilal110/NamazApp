import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share, Linking, Modal, Image, Button, Dimensions, BackHandler } from 'react-native';
import Namaz from './EidNamaz'
import More from './More'
import { Card } from 'react-native-shadow-cards';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Drawer from 'react-native-drawer'
import Drawers from '../screen/drawer'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

let { height, width } = Dimensions.get('window')

let dataArray = [
  {
    key1: 'اللَّهُ', key2: 'Allah', key3: 'The Greates Name', key4: 'سب سے بڑا نام'
  },
  {
    key1: 'الرَّحْمَنُ', key2: 'Ar Rahman', key3: 'The Most Compassionate ', key4: 'سب سے بہت مہربان'
  },
  {
    key1: 'الرَّحِیمُ', key2: 'Ar Raheem', key3: 'The Most Merciful', key4: 'نہایت رحم والا'
  },
  {
    key1: 'الْمَلِكُ', key2: 'Al Malik', key3: 'The King', key4: 'بادشاہ'
  },
  {
    key1: 'الْقُدُّوسُ', key2: 'Al Quddus', key3: 'The Most Holy', key4: ' سب سے بڑی  پاک ذات'
  },
  {
    key1: 'السَّلاَمُ', key2: 'As Salam', key3: 'The Ultimate Provider of Peace', key4: 'سلامتی والا'
  },
  {
    key1: 'الْمُؤْمِنُ', key2: "Al Mu'min", key3: 'The Guardian of Faith', key4: ' امن دینے والا'
  },
  {
    key1: 'الْمُھَیْمِنُ', key2: 'Al Muhaymin', key3: 'The Guardian, the Preserver', key4: 'نگرانی کرنے والا'
  },
  {
    key1: 'الْعَزِیزُ', key2: 'Al Aziz', key3: 'The Almighty, the Self Sufficient', key4: 'قادر , غالب'
  },
  {
    key1: 'ٱلْجَبَّارُ', key2: 'Al Jabbaar', key3: 'The Compeller', key4: 'زبردست / مجبور کرنے والا'
  },
  {
    key1: 'الْمُتَكَبِّرُ', key2: 'Al Mutakabbir', key3: 'The Dominant one', key4: 'بڑائی والا'
  },
  {
    key1: 'الْخَالِقُ', key2: 'Al Khaaliq', key3: 'The Creator', key4: 'بنانے والا'
  },
  {
    key1: 'الْبَارِئُ', key2: 'Al Baari', key3: 'The Maker', key4: ' پیدا کرنے والا'
  },
  {
    key1: 'الْمُصَوِّرُ', key2: 'Al Musawwir', key3: 'The Fashioner of Forms', key4: ' صورتیں بنانے والا'
  },

  {
    key1: 'الْغَفَّارُ', key2: 'Al Ghaffaar', key3: 'The Ever-Forgiving', key4: ' بخشنے والا'
  },
  {
    key1: 'الْقَھَّارُ', key2: 'Al Qahhaar', key3: 'The All Subduer', key4: 'سب کو اپنے قابو میں رکھنے والا '
  },
  {
    key1: 'الْوَھَّابُ', key2: 'Al Wahhaab', key3: 'The Bestower', key4: 'سب کچھ عطا کرنے والا'
  },
  {
    key1: 'الرَّزَّاقُ', key2: 'Ar Razzaaq', key3: 'The Ever-Providing, The Sustainer', key4: 'روزی دینے والا'
  },

  {
    key1: 'الْفَتَّاحُ', key2: 'Al Fattaah', key3: 'The Ultimate Judge, The Opener of All Portals, the Victory Giver', key4: 'بہت برا مشکل کشا '
  },
  {
    key1: 'العَاِیمُ', key2: ' Al Alim', key3: 'The All-Knowing, the Omniscient', key4: 'سب کچھ جاننے والا '
  },
  {
    key1: 'الْقَابِضُ', key2: 'Al Qaabidh', key3: 'The Restrainer, the Straightener', key4: 'روزی بند کرنے والا '
  },

  {
    key1: 'الْبَاسِطُ', key2: 'Al Baasit', key3: 'The Expander, the Munificent', key4: 'روزی فراغ  کرنے والا '
  },
  {
    key1: 'الْخَافِضُ', key2: 'Al Khaafidh', key3: 'The Abaser, The Demeanor', key4: '  پست کرنے والا'
  },

  {
    key1: 'الرَّافِعُ', key2: 'Ar Raafi', key3: '  The Exalter', key4: 'بلند کرنے والا'
  },
  {
    key1: 'اَلْمُعِزّ‎', key2: "Al Mu'izz", key3: 'The Giver of Honour', key4: 'عزت دینے والا'
  },
  {
    key1: 'المُذِلُّ', key2: 'Al Muzil', key3: 'The Giver of Dishonor', key4: ' ذلیل کرنے والا'
  },
  {
    key1: 'السَّمِیعُ', key2: 'As Sami', key3: 'The All-Hearing', key4: 'سب کچھ سننے والا '
  },

  {
    key1: 'الْبَصِیرُ', key2: 'Al Basir', key3: 'The All-Seeing', key4: 'سب کچھ دیکھنے والا'
  },

  {
    key1: 'الْحَكَمُ', key2: 'Al Hakam', key3: 'The Judge, the Ultimate Arbiter', key4: ' فیصلہ کرنے والا'
  },

  {
    key1: 'الْعَدْلُ', key2: "Al 'Adl", key3: 'The Utterly Just', key4: 'انصاف کرنے والا'
  },
  {
    key1: 'اللَّطِیفُ', key2: 'Al Latif', key3: 'The All-Aware', key4: ' بڑا لطف و کرم کرنے والا '
  },
  {
    key1: 'الْخَبِیرُ', key2: 'Al Khabir', key3: 'The Most Merciful', key4: 'خبر رکھنے والا'
  },

  {
    key1: 'الْحَلِیمُ', key2: 'Al Halim', key3: 'The Forbearer, The Indulgent', key4: ' بردبار'
  },
  {
    key1: 'الْعَظِیمُ', key2: 'Al-‘Adheem', key3: 'The Magnificent, the Infinite', key: 'بہت عظمت والا'
  },
  {
    key1: 'الْغَفُورُ', key2: 'Al Ghafur', key3: 'The All-Forgiving', key: 'خوب بخش دینے والا'
  },

  {
    key1: 'الشَّكُورُ', key2: 'Ash Shakur', key3: 'The Grateful', key: 'قدر دان'
  },
  {
    key1: 'الْعَلِيُّ', key2: 'Al Ali', key3: 'The Sublimely Exalted', key: 'بلندی والا'
  },
  {
    key1: 'الْكَبِیرُ', key2: 'Al Kabir', key3: 'The Great', key: ' بہت بڑا'
  },
  {
    key1: 'الْحَفِیظُ', key2: 'Al Hafidh', key3: 'The Preserver, The Protector', key: 'حفاظت کرنے والاa'
  },
  {
    key1: 'المُقیِت', key2: 'Al Muqit', key3: 'The Nourisher', key4: ' روزی پہنچانے والا'
  },
  {
    key1: 'الْحسِیبُ', key2: 'Al Hasib', key3: 'The Reckoner', key4: ' کفایت کرنے والا'
  },
  {
    key1: 'الْجَلِیلُ', key2: 'Al Jalil', key3: 'The Majestic', key4: 'عالی شان مرتبے والا'
  },
  {
    key1: 'الْكَرِیمُ', key2: 'Al Karim', key3: 'The Bountiful, the Generous', key4: 'بہت کرم کرنے والا ,  سخاوت کرنے والا '
  },
  {
    key1: 'الرَّقِیبُ', key2: 'Ar Raqib', key3: 'The Watchful', key4: 'نگہبان'
  },

  {
    key1: 'الْمُجِیبُ', key2: 'Al Mujib', key3: 'The Responsive, the Answerer', key4: 'قبول کرنے والا'
  },
  {
    key1: 'الْوَاسِعُ', key2: "Al Wasi'", key3: 'The Vast, the All Encompassing', key4: ' کشائش والا'
  },
  {
    key1: 'الْحَكِیمُ', key2: 'Al Hakim', key3: 'The Wise', key4: 'حکمت والا'
  },

  {
    key1: 'الْوَدُودُ', key2: 'Al Wadud', key3: 'The Loving, the Kind One', key4: ' محبت کرنے والا'
  },
  {
    key1: 'الْمَجِیدُ', key2: 'Al Majid', key3: 'The All Glorious', key4: 'بڑی رحمتوں والا '
  },
  {
    key1: 'الْبَاعِثُ', key2: "Al Ba'ith", key3: 'The Raiser of the Dead', key4: 'اُٹھانے والا'
  },

  {
    key1: 'الشَّھِیدُ', key2: 'Ash Shaheed', key3: 'The Witness', key4: ' حاضر'
  },

  {
    key1: 'الْحَقُّ', key2: 'Al Haqq', key3: 'The Truth, the Real', key4: ' سچا مالک'
  },
  {
    key1: 'الْوَكِیلُ', key2: 'Al Wakil', key3: 'The Trustee, the Dependable', key4: ' کام بنانے والا'
  },
  {
    key1: 'الْقَوِيُّ', key2: 'Al Qawiyy', key3: 'The Strong', key4: ' زور آور'
  },

  {
    key1: 'الْمَتِینُ', key2: 'Al Mateen', key3: 'The Firm, the Steadfast', key4: 'قوت والا'
  },
  {
    key1: 'الْوَلِيُّ', key2: 'Al Wali', key3: 'The Protecting Friend, Patron, and Supporter', key4: 'حمایت کرنے والا'
  },

  {
    key1: 'الْحَمِیدُ', key2: 'Al Hamidu', key3: 'The All Praise Worthy', key4: 'تمام تعریف قابل  والا'
  },
  {
    key1: 'الْمُحْصِي', key2: 'Al Muhsi', key3: 'The Accounter, The Numberer of All', key4: 'a'
  },
  {
    key1: 'الْمُبْدِئُ', key2: 'Al Mubdi', key3: 'The Producer, Originator, and Initiator of all', key4: 'پہلی بار پیدا کرنے والا'
  },
  {
    key1: 'الْمُعِیدُ', key2: "Al Mu'id", key3: 'The Reinstater Who Brings Back All', key4: 'دوبارہ پیدا کرنے والا'
  },

  {
    key1: 'الْمُحْیِي', key2: 'Al Muhyi', key3: 'The Giver of Life', key4: 'زندہ کرنے والا'
  },
  {
    key1: 'الْمُِمیتُ', key2: 'Al Mumit', key3: 'The Bringer of Death, the Destroyer', key4: ' مارنے والا'
  },

  {
    key1: 'الْحَيُّ', key2: 'Al Hayy', key3: 'The Ever Living', key4: '  زندہ رہنے والا '
  },
  {
    key1: 'الْقَیُّومُ', key2: 'Al Qayyum', key3: 'The Self Subsisting Sustainer of All', key4: '  سب کو تھامنے والا'
  },
  {
    key1: 'الْوَاجِدُ', key2: 'Al Waajid', key3: 'The Perceiver, the Finder, the Unfailing', key4: '   پانے والا'
  },
  {
    key1: 'الْمَاجِدُ', key2: 'Al Maajid', key3: 'TThe Illustrious, the Magnificent', key4: 'عزت والا'
  },

  {
    key1: 'الْواحِدُ', key2: 'Al Waahid', key3: 'The One, the All Inclusive, the Indivisible', key4: 'اکیلا'
  },
  {
    key1: 'اَلاَحَدُ', key2: 'Al Ahad', key3: 'The One, the Indivisible', key4: 'بے نیاز'
  },
  {
    key1: 'الصَّمَدُ', key2: 'As Samad', key3: 'The Everlasting,The Eternal Refuge', key4: ' قدرت والا'
  },
  {
    key1: 'الْقَادِرُ', key2: 'Al Qaadir', key3: 'The All-Capable, The Most Able, The Most Powerful', key4: ' مقدور والا'
  },
  {
    key1: 'الْمُقْتَدِرُ', key2: 'Al Muqtadir', key3: 'The All Determiner, the Dominant', key4: ' سب کا تعین کرنے والا '
  },

  {
    key1: 'الْمُؤَخِّرُ', key2: "Al Mu'akhkhir", key3: 'The Delayer, He who brings backwards', key4: 'پیچھے کرنے والا'
  },
  {
    key1: 'الأوَّلُ', key2: 'Al Awwal', key3: 'The First', key4: 'سب سے پہلے'
  },

  {
    key1: 'الآخِرُ', key2: 'Al Aakhir', key3: 'The Last', key4: 'سب سے آخر'
  },
  {
    key1: 'ٱلْظَّاهِرُ', key2: 'Az Dhaahir', key3: 'The Manifest; the All Victorious', key4: ' ظاہر'
  },
  {
    key1: 'الْبَاطِنُ', key2: 'Al Baatin', key3: 'The Hidden; the All Encompassing', key4: 'پوشیدہ'
  },
  {
    key1: 'الْوَالِي', key2: 'Al Waali', key3: 'The Patron', key4: '  مالک    '
  },
  {
    key1: 'الْمُتَعَالِي', key2: "Al Muta'ali", key3: 'The Self Exalted', key4: 'بلند صفتوں وال'
  },

  {
    key1: 'الْبَرُّ', key2: 'Al Barr', key3: 'The Most Kind and Righteous', key4: 'احسان کرنے والا'
  }, {
    key1: 'التَوَّابُ', key2: 'At Tawwaab', key3: 'The Ever-Pardoning, Ever Relenting', key4: '  توبہ قبول کرنے والا'
  },
  {
    key1: 'الْمُنْتَقِمُ', key2: 'Al Muntaqim', key3: 'The Avenger', key4: 'بدلہ لینے والا'
  },
  {
    key1: 'العَفُوُّ', key2: "Al 'Afuww", key3: 'The Pardoner, The Forgiver', key4: '  معاف کرنے والا'
  }, {
    key1: 'الرَّؤُوفُ', key2: "Ar Ra'uf", key3: 'The Clement, The Compassionate, The All-Pitying', key4: ' نرمی کرنے والا'
  },
  {
    key1: 'مَالِكُ الْمُلْكِ', key2: 'Malik Al Mulk', key3: 'The Owner of All Sovereignty', key4: 'بادشاہی کا مالک'
  },
  {
    key1: 'ذُوالْجَلاَلِ وَ الإكْرَامِ', key2: 'Dhual Jalal wa Al Ikram', key3: 'The Lord of Majesty and Generosity', key4: 'جلال والا اور انعام والا'
  },
  {
    key1: 'الْمُقْسِطُ', key2: 'Al Muqsit', key3: 'The Equitable, the Requiter', key4: '  انصاف کرنے والا'
  },
  {
    key1: 'الْجَامِعُ', key2: "Al Jaami'", key3: 'The Gatherer, the Unifier', key4: 'اکھٹا کرنے والا'
  },
  {
    key1: 'الْغَنِيُّ', key2: 'Al Ghani', key3: 'The All Rich, the Independent', key4: ' بے پروا'
  },
  {
    key1: 'الْمُغْنِي', key2: 'Al Mughni', key3: 'The Enricher, the Emancipator', key4: 'بے پروا کرنے والا'
  },
  {
    key1: 'اُلمَانِعُ', key2: "Al Mani'", key3: 'The Withholder, the Shielder, the Defender', key4: 'روکنے والا'
  },
  {
    key1: 'الضَّارَّ', key2: 'Ad Dharr', key3: 'The Distresser', key4: 'نقصان پہنچانے والا'
  },
  {
    key1: 'النَّافِعُ', key2: "An Nafi'", key3: 'The Propitious, the Benefactor', key4: 'نفع پہنچانے والا'
  },
  {
    key1: 'النُّورُ', key2: 'An Nur', key3: 'The Light', key4: 'روشن کرنے والا'
  },
  {
    key1: 'الْھَادِي', key2: 'Al Hadi', key3: 'The Guide', key4: ' ہدایت دینے والا'
  },
  {
    key1: 'الْبَدِیعُ', key2: "Al Badi'", key3: 'Incomparable, the Originator', key4: 'نئی طرح پیدا کرنے والا'
  },
  {
    key1: 'الْبَاقِي', key2: 'Al Baaqi', key3: 'The Ever Enduring and Immutable ', key4: 'پاقی رہنے والا'
  },
  {
    key1: 'الْوَارِثُ', key2: 'Al Waarith', key3: 'The Heir, the Inheritor of All ', key4: 'سب کا وارث'
  },
  {
    key1: 'الرَّشِیدُ', key2: 'Ar Rashid', key3: 'The Guide, Infallible Teacher, and Knower', key4: ' نیک راہ بتانے والا'
  },
  {
    key1: 'الصَّبُورُ', key2: 'Al Saboor', key3: 'The Forbearing, The Patient ', key4: 'صبر کرنے والا'
  },


]
class Names extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }


  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  static navigationOptions = {
    title: "99 Names",
    header: null
  }

  backAction = () => {
    this.props.navigation.navigate('Home')
    return true
  }
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

      <Drawer
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        acceptPan={true}
        content={
          < Drawers navigateFunc={this.navigateFunc} currentScreen={'Names'} closeDrawer={this.closeDrawer} />


        }
        openDrawerOffset={0.25} // 20% gap on the right side of drawer
        type="overlay"
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: 60, width: width, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.openDrawer()} style={{ marginLeft: 10 }}><Entypo name={'menu'} size={25} color={'#fff'} /></TouchableOpacity>
            <Text style={{ color: '#fff', marginLeft: width * 0.25, fontSize: 20, fontWeight: 'bold' }}>Allah Names</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginLeft: 80 }}><Entypo name={'home'} size={25} color={'#fff'} /></TouchableOpacity>

          </View>


        </View>

        <Image
          source={require('../Assets/names.jpg')}
          style={{ width: '100%', height: '35%', marginTop: 60 }}
        />


        <ScrollView >
          <View style={{ marginLeft: 6 }}>
            {dataArray.map((data) => {
              return (
                <Card style={{ padding: 10, margin: 7, }}>
                  <Text style={styles.maintext} > {data.key1}</Text>
                  <LinearGradient colors={['#67971A', '#6DFD9C']} >
                    <Text style={styles.centtext}> {data.key2}</Text></LinearGradient>
                  <Text style={styles.lasttext}> {data.key3}</Text>
                  <Text style={styles.lasttext}> {data.key4}</Text>

                </Card>
              )
            })}


          </View>
        </ScrollView>

      </Drawer>


    )
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  maintext: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 3

  },
  centtext: {
    fontSize: 20,
    textAlign: 'center',



  },
  lasttext: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold'

  }
})

export default Names