/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/screens/Home';
import List from './app/screens/List';
import Weather from './app/screens/Weather';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
       <StatusBar barStyle="dark-content" backgroundColor="#444"/>
        <Stack.Navigator>
           <Stack.Screen  name='Home' component={Home} options={{ title: 'Home' , 
               headerStyle:{backgroundColor:'#444'} , headerTintColor: '#61dafb'}}/>
              <Stack.Screen  name='List' component={List} options={{ title: 'List' , 
               headerStyle:{backgroundColor:'#444'} , headerTintColor: '#61dafb'}}/>
               <Stack.Screen  name='Weather' component={Weather} options={{ title: 'List' , 
               headerStyle:{backgroundColor:'#444'} , headerTintColor: '#61dafb'}}/>
        </Stack.Navigator>
     </NavigationContainer>
      
   
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
