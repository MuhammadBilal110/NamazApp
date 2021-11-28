import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import QiblaFinder from '../screen/QiblaContainer'
import Namaz from '../screen/NamazRaqat'
import Prayer from '../screen/Prayer'
import Components from '../screen/Components'
import Tasbeeh from '../screen/Tasbeeh'
// import Main from '../screen/Main'
import Names from '../screen/Names'
import Wazuu from'../screen/Wazuu'
import Male from '../screen/MaleNamaz'
import Female from '../screen/FMaleNamaz'
import Counter from '../screen/Tcounter'

import EidNamaz from '../screen/EidNamaz'
import Duaen from '../screen/Duaen'
import JNamaz from '../screen/janazaNamaz'
import Splash from '../screen/SplashScreen'
import Contact from '../screen/Contactus'
import Privacy from '../screen/Privacy'
import About from '../screen/About'
import Feedback from '../screen/feedback'
const QiblaStackNavigator = createSwitchNavigator({
   Splash:{
    screen: Splash,
    navigationOptions: {
        header: null,
    },
   },
    Components: {
        screen: Components,
        navigationOptions: {
            header: null,
        },
    },
  
    Namaz: {
        screen: Namaz,
        navigationOptions: {
            header: null,
        },
    },
 
    Tasbeeh: {
        screen: Tasbeeh,
        navigationOptions: {
            header: null,
        },
    },
    Names: {
        screen: Names,
        navigationOptions: {
            header: null,
        },
    },
    Wazuu: {
        screen: Wazuu,
        navigationOptions: {
            header: null,
        },
    },
    MPrayer: {
        screen: Male,
        navigationOptions: {
            header: null,
        },
    },
    Female: {
        screen: Female,
        navigationOptions: {
            header: null,
        },
    },
    Allah: {
        screen: Counter,
        navigationOptions: {
            header: null,
        },
    },
    
    EidNamaz:{
        screen: EidNamaz ,
        navigationOptions: {
            header: null,
        },
    },
    Duaen:{
        screen: Duaen ,
        navigationOptions: {
            header: null,
        },

    },

    JNamaz:{
        screen: JNamaz ,
        navigationOptions: {
            header: null,
        },

    },
    Contact:{
        screen: Contact ,
        navigationOptions: {
            header: null,
        },

    }, About:{
        screen: About ,
        navigationOptions: {
            header: null,
        },

    }, Privacy:{
        screen: Privacy ,
        navigationOptions: {
            header: null,
        },

    },Feedback:{
        screen: Feedback ,
        navigationOptions: {
            header: null,
        },

    },
   
    

    
   


});

export default createAppContainer(QiblaStackNavigator)