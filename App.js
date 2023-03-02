import {View, Text} from 'react-native';
import React from 'react';
import First from './src/screens/First';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store/store';
import Textinputscreen from './src/screens/Textinputscreen';
import MyScreen from './src/screens/Mapscreen';
import NativeModule from './src/screens/NativeModule';
import Steps from './src/screens/Steps';
export default function App() {
  return <NativeModule />;
}
