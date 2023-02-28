// import { View, Text, TextInput } from 'react-native'
// import React, { useState } from 'react' 
// import QRCode from 'react-native-qrcode-svg';
// export default function Mapscreen() {
//     const [text, setText] = useState('');
//    console.log(text);
//   return (
//     <View style={{flex:1,backgroundColor:'pink' ,justifyContent:'center',alignItems:'center'}}>  
//     <TextInput value={text} onChangeText={val=>setText(val)} style={{height:50,width:'80%',backgroundColor:'#808080',margin:10, }} />
//     <QRCode
//     size={300}
//       value={text==''?"http://awesome.link.qr":text}
//     /> 
//     </View>
//   )
// }
import React from "react";
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";

export default function MyScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View ref={"otherView1"} />
      <View ref={"otherView2"} />
      <View ref={"otherView3"} />
      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
      <FlashMessage position="top" /> {/* <--- here as the last component */}
    </View>
  );
}