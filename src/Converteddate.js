import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default function Converteddate({mode, open, date, onConfirm, onCancel,maximumDate,minimumDate,onDateChange}) {
 //const offset = new Date().getTimezoneOffset() * -1;
  return (
    <DatePicker 
    maximumDate={maximumDate}
    minimumDate={minimumDate}
      mode={mode}
      modal
      open={open}
 
      date={date}
      onConfirm={onConfirm}
      onCancel={onCancel}
      onDateChange={onDateChange}
      //timeZoneOffsetInMinutes={offset}

    //timeZoneOffsetInMinutes={10}
    //minuteInterval={30}
    
      
      
    />
  );
}
