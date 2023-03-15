// import {View, Text} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../screens/Classcompontes/Home';
// import Information from '../screens/Classcompontes/Information';
// import {createAppContainer} from 'react-navigation';

// const appnavigator = createNativeStackNavigator({
//   Home: {
//     screen: Home,
//   },
//   Information: {
//     screen: Information,
//   },
// });
// export default createAppContainer(appnavigator);
// // return (
// //   // <NavigationContainer >
// //   //   <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#14FFEC'} }}>
// //   //     <Stack.Screen name="Home" component={Home} />
// //   //     <Stack.Screen name="Information" component={Information} />
// //   //   </Stack.Navigator>
// //   // </NavigationContainer>

// // );


import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Classcompontes/Home';
import Information from '../screens/Classcompontes/Information';
import Apicallclassbaseredux from '../screens/Classcompontes/Apicallclassbaseredux';
const Stack = createNativeStackNavigator();

export default function Stacknavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#14FFEC'} }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Information" component={Information} /> 
        <Stack.Screen name='Apicall' component={Apicallclassbaseredux} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
