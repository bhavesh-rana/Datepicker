import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

export default function Textinputcontainer({item, index, datapass}) {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
  const [testFocas, setTestFocas] = useState(false);
  const [text, setText] = useState(prop2map.val);
  return (
    <TextInput
      placeholder={item.type}
      value={item.type == 'readonly' ? 'This is  not change' : text}
      onFocus={() => setTestFocas(true)}
      onChangeText={val => datapass(val, item, index)}
      keyboardType={
        item.type !== 'phone' && item.type !== 'numeric'
          ? 'default'
          : 'number-pad'
      }
      multiline
      style={{
        textAlignVertical: item.type == 'textarea' ? 'top' : 'center',
        height: item.type == 'textarea' ? 100 : 50,
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: testFocas ? '#DF7F00' : null,
        backgroundColor: item.type == 'readonly' ? 'rgba(99,99,99,0.5)' : null,
      }}
    />
  );
}

const styles = StyleSheet.create({});
