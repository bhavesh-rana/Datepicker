import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

const Chekbox = ({item, index, datapass}) => {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
  const [isChecked, setIsChecked] = useState(
    isEmpty(prop2map) ? false : prop2map.val,
  );

  return (
    <CheckBox
      style={{flex: 1, padding: 10, marginLeft: 20}}
      onClick={() => {
        setIsChecked(!isChecked);
        datapass(!isChecked, item, index);
      }}
      isChecked={isChecked}
      rightText={'ChekBoxLebel'}
      checkBoxColor={'#DF7F00'}
    />
  );
};

export default Chekbox;

const styles = StyleSheet.create({});
