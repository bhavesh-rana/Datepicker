import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heder from '../commen/Heder';
import {data} from '../commen/Data';
import * as Progress from 'react-native-progress';
import DatetimeLabel from '../commen/DatetimeLabel';
import Togalsbuttons from '../commen/Togalsbuttons';
import Contactselect from '../commen/Contactselect';
import Selectmulty from '../commen/Selectmulty';
import Chekbox from '../commen/Chekbox';
import Sign from '../commen/Signatures'; 
import ImagesPicks from '../commen/ImagesPicks';

import Textinputcontainer from '../commen/Textinputcontainer';
import Company from '../commen/Company';
import Project from '../commen/Project';
import {useDispatch, useSelector} from 'react-redux';
import {endResult} from '../Redux/action/action';

export default function Managedata() {
  const dispatch = useDispatch();
  const [progresss, setProgresss] = useState(0.0476);
  const [count, setCount] = useState(0);
  const onNext = () => {
    if (count < data.length - 1) {
      setProgresss(progresss + 1 / data.length);
      setCount(count + 1);
    }
  };

  const datapass = (val, item, index) => {
    const tem = {
      index: index,
      label: item?.label,
      val: val,
    };
    dispatch(endResult(tem));
  };

  const dataredux = useSelector(state => state?.data);
   console.log("dataredux",dataredux);
   const renderData = ({item, index}) => {
    if (item.type == 'toggle' && index == count) {
      return (
        <View>
          <Text style={styles.labelText}>{item.label}</Text>
          <Togalsbuttons index={index} datapass={datapass} item={item} />
        </View>
      );
    } else if (
      (item.type == 'contact' ||
        item.type == 'company' ||
        item.type == 'project') &&
      index == count
    ) {
      return (
        <View>
          <Text style={styles.labelText}>{item.label}</Text>
          <Contactselect index={index} datapass={datapass} item={item} />
        </View>
      );
    } else if (
      (item.type == 'selectmulti' || item.type == 'select') &&
      index == count
    ) {
      return (
        <View>
          <Text style={styles.labelText}>{item.label}</Text>
          <Selectmulty index={index} datapass={datapass} item={item} />
        </View>
      );
    } else if (
      (item.type == 'text' ||
        item.type == 'phone' ||
        item.type == 'textarea' ||
        item.type == 'email' ||
        item.type == 'numeric' ||
        item.type == 'readonly') &&
      index == count
    ) {
      return (
        <View>
          <Text style={styles.labelText}>{item.label}</Text>
          <Textinputcontainer item={item} index={index} datapass={datapass} />
        </View>
      );
    } else if (item.type == 'readonly' && index == count) {
      return (
        <View>
          <Text style={styles.labelText}>{item.label}</Text>
        </View>
      );
    } else if ((item.type == 'date' || item.type == 'time') && index == count) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.labelText}>{item.label}</Text>
          <DatetimeLabel item={item} index={index} datapass={datapass} />
        </View>
      );
    } else if (item.type == 'duration' && index == count) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.labelText}>{item.label}</Text>
        </View>
      );
    } else if (item.type == 'photo' && index == count) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.labelText}>{item.label}</Text>
          <ImagesPicks item={item} index={index} datapass={datapass} />
        </View>
      );
    } else if (item.type == 'label' && index == count) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.labelText}>{item.label}</Text>
        </View>
      );
    } else if (item.type == 'checkbox' && index == count) {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.labelText}>{item.label}</Text>
          <Chekbox  index={index} datapass={datapass} item={item} />
        </View>
      );
    } else if (item.type == 'signature' && index == count) {
      return (
        <View style={{flex:1 }}>
          <Text style={styles.labelText}>{item.label}</Text>
          <Sign  item={item} index={index} datapass={datapass} />
        </View>
      );
    }
  };
  const onBackpress = () => {
    if (count > 0) {
      setCount(count - 1);
      setProgresss(progresss - 1 / data.length);
    }
  };
  return (
    <>
      <Heder onBackpress={onBackpress} />
      <View style={{flex: 1}}>
        <Text style={styles.progresscount}>{`${count + 1} of ${
          data.length
        }`}</Text>
        <Progress.Bar
          color="#DF7F00"
          style={{alignSelf: 'center'}}
          progress={progresss}
          width={330}
        />
        <View style={{flex: 1}}>
          <FlatList data={data} renderItem={renderData} />
        </View>
        <TouchableOpacity onPress={onNext} style={styles.onNextstyles}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  labelText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  onNextstyles: {
    backgroundColor: '#DF7F00',
    height: 50,
    marginBottom: 30,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progresscount: {
    alignSelf: 'center',
    margin: 5,
    color: '#DF7F00',
  },
});
