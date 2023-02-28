import { View, Text } from 'react-native'
import React from 'react'
import First from './src/screens/First'
import { Provider } from "react-redux";
import { store } from './src/Redux/store/store';
import Textinputscreen from './src/screens/Textinputscreen';
import MyScreen from './src/screens/Mapscreen';
export default function App() {
  return ( 
<Provider store={store}> 
   <First/>
</Provider>

      
      
 
  )
}