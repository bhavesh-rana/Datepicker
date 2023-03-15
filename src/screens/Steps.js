import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {icons} from '../helper/Icons/icons';

const Steps = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const [rotate, setRotate] = useState(false);
  const [temp, setTemp] = useState(false);
  const [height, setHeight] = useState(100);
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateArrow = () => {
    changeHeight();
    setRotate(!rotate);
    setTemp(!temp);
    Animated.timing(rotateValue, {
      toValue: rotate ? 0 : 180, // Rotate from 0 degrees to 180 degrees if not rotated, and from 180 degrees to 0 degrees if rotated
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start(() => {});
  };

  const changeHeight = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setHeight(height === 100 ? 300 : 100);
  };

  const interpolatedRotateAnimation = rotateValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={rotateArrow}>
        <Text style={styles.buttonText}>Rotate Arrow</Text>
      </TouchableOpacity>
      <View style={styles.arrowContainer}>
        <Animated.Image
          source={icons.back}
          style={[
             {
              transform: [{rotate: interpolatedRotateAnimation}],
              width: 50,
              height: 50,
              tintColor: temp ? 'red' : 'black',
            },
          ]}
        />

        <TouchableOpacity
          style={{
            height: height,
            width: 300,
            backgroundColor: 'red',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  arrow: {
    width: 50,
    height: 50,
    // tintColor:"red"
  },
});

export default Steps;

// import React, { useState } from "react";
// import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";

// if (
//   Platform.OS === "android" &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const Steps = () => {

//   ;

//

//   return (
//     <View style={{flex : 1, alignItems : "center", justifyContent : "center"}}>
//       <TouchableOpacity
//         style={{height : height, width : 300, backgroundColor : "red"}}
//         onPress={() => changeHeight(height === 100 ? 300 : 100)}
//       >
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Steps;
