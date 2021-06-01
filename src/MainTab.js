import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const AccountStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name='Account'
//             component={AccountScreen}
//             options={{
//                 headerShown: false
//             }}
//         />
//         <Stack.Screen
//             name='Profile'
//             component={ProfileScreen}
//             options={{
//                 headerTitle: 'Profile',
//                 headerTitleAlign: 'center',
//             }}
//         />

//     </Stack.Navigator>
// );

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#355171',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 15,
                marginTop: 10,
            },
            headerStyle: {
                height: 72,
                
            }
        }}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'FIS INSIGHT',
                    headerLeft: () => (
                        <View style={{ height: 25, width: 25, marginLeft: 18, marginBottom: 15, marginTop: 10 }}>
                            <Image source={require('./res/images/ic_menu.png')} style={styles.image} />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 18, marginBottom: 15, marginTop: 10 }}>
                            <MaterialCommunityIcons
                                name='bell'
                                color='gray'
                                size={25} 
                            />
                        </View>
                    )
                }}
            />

        </Stack.Navigator>
    )
}

export default class MainTabScreen extends React.Component {
    render() {
        return (

            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
            </Drawer.Navigator>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
});