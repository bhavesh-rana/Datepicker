import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icons} from '../helper/Icons/icons';

const Heder = ({onBackpress}) => {
  const onBacks = () => {
    onBackpress();
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onBacks}>
          <Image source={icons.back} />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 19}}>Complete Timesheet</Text>
      </View>
    </View>
  );
};

export default Heder;

const styles = StyleSheet.create({
  container: {height: 60, backgroundColor: '#DF7F00', marginBottom: 30},
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    width: '80%',
  },
});
