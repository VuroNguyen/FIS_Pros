/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   ActivityIndicator,
 } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/RootStack';
import MainTabScreen from './src/MainTab';

 
 const App = () => {
 
   const [isLoading, setIsLoading] = React.useState(true);
 
   /*const authContext = React.useMemo(() => ({
     signOut: () => {
       setIsLoading(false)
       console.log('hi');
     }
     
   }), []);*/
 
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   }, []);
 
   if(isLoading) {
     return(
       <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
         <ActivityIndicator size="large" color='black' duration='500'/>
       </View>
     );
   }
   return (
     <NavigationContainer>
     <MainTabScreen/>
     </NavigationContainer>
   );
 };
 
 
 export default App;
 