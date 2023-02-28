// import {
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';

// export default function Textinputscreen() {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#909', }}> 
 
//      <KeyboardAvoidingView
//       style={{alignItems:'center'}}
//         behavior='position'
//         keyboardVerticalOffset="200"
//         enabled> 
//        <TextInput style={[styles.inputText, {marginBottom: 40,marginTop:200}]} />
//         <TextInput style={[styles.inputText]} />
//       </KeyboardAvoidingView> 
//       <KeyboardAvoidingView
//       style={{alignItems:'center',marginTop:300}}
//         behavior='position'
//         keyboardVerticalOffset= {Platform.OS === 'ios' ? 40 : 100}
//         enabled>
//         <TouchableOpacity
//           style={{
//             backgroundColor: '#F18900', 
//             width: 200,
//             height: 50, 
//             borderRadius: 12,
//             alignSelf: 'center',
//             justifyContent:'center',
//             alignItems:'center',
         
//           }}>
//           <Text>SUBMIT</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   inputText: {
//     color: '#7878',
//     backgroundColor: '#808080',
//     width: 280,
//     fontSize: 20,
//     paddingHorizontal: 5,
//     height: 50,
//     borderRadius: 10,
//     borderColor: '#677',
//     borderWidth: 1,
//     marginBottom: 10,
//   },
// });
