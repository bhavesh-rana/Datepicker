import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const Selectmulty = ({item, datapass, index}) => {

  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
  

  const [selectedData, setSelectedData] = useState(
    prop2map?.val == undefined ? [] : prop2map?.val,
  );

   const onPressData = values => {
    if (item.type == 'select') {
      setSelectedData([values]);
      datapass([values], item, index);
    } else {
      if (!selectedData?.includes(values)) {
        setSelectedData([...selectedData, values]);
        datapass([...selectedData, values], item, index);
      }
    }
  };
  const removeItem = items => {
    setSelectedData(selectedData.filter(val => val != items));
    datapass(
      prop2map?.val.filter(val => val != items),
      item,
      index,
    );
  };
  const allremoveData = () => {
    setSelectedData([]);
    datapass([''], item, index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectedDataconatiner}>
        <FlatList
          horizontal
          data={selectedData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => removeItem(item)}
                style={styles.selectedDataName}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={{}} onPress={allremoveData}>
          <Text style={styles.clearButton}>*</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.seloptions.split('|')}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPressData(item)}>
              <Text
                style={{
                  borderTopWidth: 1,
                  padding: 5,
                  color: selectedData?.includes(item) ? '#000' : '#899',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Selectmulty;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  selectedDataconatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  selectedDataName: {
    backgroundColor: '#8989',
    marginHorizontal: 5,
    padding: 5,
  },
  clearButton: {
    fontSize: 30,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
