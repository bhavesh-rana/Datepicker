import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const data = [
  'project 1',
  'project 2',
  'project 3',
  'project 4',
  'project 5',
  'project 6',
  'project 7',
  'project 8',
  'project 9',
  'project 10',
];

const Project = () => {
  const [indexs, setIndex] = useState();
  return (
    <View
      style={{
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
      }}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setIndex(index)}
              style={{
                backgroundColor:
                  index == indexs ? '#DF7F00' : 'rgba(255,255,255,1)',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                margin: 5,
              }}>
              <Text
                style={{
                  color: index == indexs ? '#fff' : 'rgba(0,0,0,1)',
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

export default Project;

const styles = StyleSheet.create({});
