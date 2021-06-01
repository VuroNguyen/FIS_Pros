import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import AsyncStorage from '@react-native-community/async-storage';

import Login from "./Login";
import MainTab from "./MainTab";


const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },  
});

export default createAppContainer(StackNavigator);