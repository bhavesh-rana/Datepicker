import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const companyNames = [
  'Company-1',
  'Company-2',
  'Company-3',
  'Company-4',
  'Company-5',
  'Company-6',
  'Company-7',
];

const Company = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.Container}>
      <TextInput
      placeholder='Company..'
        value={text}
        onChangeText={val => setText(val)}
        style={styles.textInput}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={companyNames.filter(val => val.includes(text))}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setText(item)}
                style={[
                  styles.onClickItem,
                  {borderTopWidth: index != 0 ? 1 : 0},
                ]}>
                <Text style={{color: '#000'}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  Container: {
    flex: 1,
    alignSelf: 'center',
    width: '80%',
  },
  listContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  onClickItem: {
    height: 40,

    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
