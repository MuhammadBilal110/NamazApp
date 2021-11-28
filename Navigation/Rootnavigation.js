import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import QiblaStackNavigator from './Navigation'
import TabNavigator from './tabNavigator'



const RootStackNavigator = createSwitchNavigator({
    Qibla: {
        screen: QiblaStackNavigator,
        
        },
       
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            header: null,
        },

    },
    
},
)

export default createAppContainer(RootStackNavigator)