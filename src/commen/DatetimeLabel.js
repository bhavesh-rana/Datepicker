import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
const DatetimeLabel = ({item, index, datapass}) => {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(
    isEmpty(prop2map) ? new Date() : prop2map.val,
  );
  const showPicker = () => {
    setIsPickerShow(true);
  };
  const onChange = (event, value) => {
    setDate(value);
    const temp = {
      hovers: value.getHours(),
      minutes: value.getMinutes(),
    };
    item.type == 'date'
      ? datapass(value, item, index)
      : datapass(temp, item, index);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  return (
    <View style={styles.container}>
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={item.type}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
      {item.type == 'date' ? (
        <TouchableOpacity onPress={showPicker} style={styles.dateConatiner}>
          <Text style={{fontSize: 19}}>{date.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => showPicker()}
            style={styles.hoversConatiner}>
            <Text style={styles.hoverseText}>
              {!isEmpty(prop2map) ? prop2map?.val?.hovers : date.getHours()}
            </Text>
          </TouchableOpacity>
          <Text style={styles.colonStyles}>:</Text>
          <TouchableOpacity onPress={showPicker} style={styles.hoversConatiner}>
            <Text style={styles.hoverseText}>
              {!isEmpty(prop2map) ? prop2map?.val?.minutes : date.getMinutes()}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  datePicker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dateConatiner: {
    backgroundColor: 'rgba(238, 238, 238, 1)',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    padding: 10,
  },
  hoversConatiner: {
    backgroundColor: 'rgba(238, 238, 238, 1)',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    padding: 10,
    margin: 10,
  },
  hoverseText: {fontSize: 19, color: '#000', fontWeight: '600'},
  colonStyles: {
    marginHorizontal: 10,
    fontSize: 19,
    color: '#000',
    fontWeight: '600',
  },
});

export default DatetimeLabel;
