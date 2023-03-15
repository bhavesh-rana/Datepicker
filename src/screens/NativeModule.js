import {
  Image,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../helper/Icons/icons';
const {xyz} = NativeModules;

const NativeModule = () => {
  const [onoffManage, setOnoffManage] = useState();
  const onPresslight = async mode => {
    if (Platform.OS == 'ios') {
      if (mode == 1) {
        await NativeModules.Counter.increment(value => {
           setOnoffManage(value);
        });
      } else {
        await NativeModules.Counter.off(value => {
           setOnoffManage(value);
        });
      }
    } else {
      xyz.lightOn(mode, (err, valu) => {
        if (err) return console.log(err);
         setOnoffManage(valu);
      });
    }
  };
  return (
    <View style={styles.container}>
      {onoffManage ? (
        <Image source={icons.bulb} />
      ) : (
        <Image source={icons.offLight} />
      )}
      {!onoffManage ? (
        <TouchableOpacity
          style={styles.buttonConatiner}
          onPress={() => onPresslight(1)}>
          <Text style={{color: '#fff'}}>Light On</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonConatiner}
          onPress={() => onPresslight(0)}>
          <Text style={{color: '#fff'}}>Light Off</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NativeModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#655DBB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConatiner: {
    backgroundColor: '#13005A',
    padding: 10,
    borderRadius: 10,
    margin: 100,
  },
});
