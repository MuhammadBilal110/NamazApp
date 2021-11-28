import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import MainStackNavigator from './Navigation'
import TabNavigator from './tabNavigator'



const RootStackNavigator = createSwitchNavigator({
    Qibla: {
        screen: MainStackNavigator,
        
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