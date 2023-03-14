import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

const colors = ['green', 'blue', 'red'];

const Togalsbuttons = ({item, datapass, index}) => {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
  const [toggaleButons, settoggaleButo] = useState(prop2map.val);
  const onPressButtons = val => {
    settoggaleButo(val);
    datapass(val, item, index);
  };

  useEffect(() => {
    if (isEmpty(prop2map)) {
      onPressButtons('Yes');
    }
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={item.seloptions.split('|')}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  toggaleButons == item.substring(2) ? colors[index] : null,
                height: 50,
                width: 110,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}
              onPress={() => onPressButtons(item.substring(2))}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '700',
                  color: toggaleButons == item.substring(2) ? '#fff' : '#000',
                }}>
                {item.substring(2)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Togalsbuttons;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
  },
});
