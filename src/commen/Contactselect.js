import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../helper/Icons/icons';
import { useSelector } from 'react-redux';

const data = [
  'Gaurang (cc)',
  'Cloudcon Pty Ltd',
  'Kevin Blakemore',
  'Julian Tabone',
  'AirPac Bukom',
  'Anglo Grosvernor',
];
const companyNames = [
  'Company-1',
  'Company-2',
  'Company-3',
  'Company-4',
  'Company-5',
  'Company-6',
  'Company-7',
];
const project = [
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

export default function Contactselect({item, datapass, index}) {

  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });

  const [visibal, setVisibal] = useState(false);
  const [textValuve, setTextValuve] = useState('');
  const [contactName, setContactName] = useState(prop2map.val);
  const onModalShow = () => {
    setVisibal(!visibal);
  };

  const tempData =
    'contact' == item.type
      ? data
      : 'project' == item.type
      ? project
      : companyNames;

  const onPressContact = val => {
    setContactName(val);
    datapass(val, item, index);
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.arraowConatiner, {borderBottomWidth: visibal ? 1 : 0}]}>
        <Text>{contactName}</Text>
        <TouchableOpacity onPress={onModalShow}>
          <Image
            source={visibal ? icons.downArrow : icons.upArrow}
            style={{height: 10, width: 20}}
          />
        </TouchableOpacity>
      </View>
      {visibal && (
        <View style={{marginTop: 10}}>
          <TextInput
            placeholder="Search.."
            value={textValuve}
            onChangeText={val => setTextValuve(val)}
            style={styles.textInput}
          />
          <FlatList
            style={{marginTop: 10}}
            data={tempData.filter(str => {
              return str.toLowerCase().indexOf(textValuve?.toLowerCase()) >= 0;
            })}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressContact(item)}
                  style={{padding: 10, borderTopWidth: 1}}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  arraowConatiner: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
});
