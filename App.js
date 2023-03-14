import {View, Text} from 'react-native';
import React from 'react';
import First from './src/screens/First';
import {Provider} from 'react-redux';
import Textinputscreen from './src/screens/Textinputscreen';
import MyScreen from './src/screens/Mapscreen';
import NativeModule from './src/screens/NativeModule';
import Steps from './src/screens/Steps';
import Home from './src/screens/Classcompontes/Home';
import Stacknavigation from './src/Navigation/Stacknavigation';
import apiCalll from './src/Redux/reducer/Apicallreducer';
import {createStore} from 'redux';
import Information from './src/screens/Classcompontes/Information';

import {AppRegistry} from 'react-native';
import {store} from './src/Redux/store/store';
import Managedata from './src/screens/Managedata';
import Apicallclassbaseredux from './src/screens/Classcompontes/Apicallclassbaseredux';
//const store = createStore(apiCalll);

export default function App() {
  return (
   <Provider store={store}>
    <Apicallclassbaseredux/>
    </Provider>
  );
}
