import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../helper/Icons/icons';
import Converteddate from '../Converteddate';
import {useDispatch, useSelector} from 'react-redux';
import {Enddate, Startdate, Timesheet} from '../Redux/action/action';
import {showMessage} from 'react-native-flash-message';

export default function InputBox({data, dataIndex}) {
  const datapicDatadate = '' + data.map(item => item?.picStartdate);
  const datapicDatatime = '' + data.map(item => item?.picStarttime);
  const datapicEnddate = '' + data.map(item => item?.picEnddate);
  const datapicEndtime = '' + data.map(item => item?.picEndtime);
  const sendDates = Number('' + data.map(item => item?.startdateTimestaps));
  const endDates = Number('' + data.map(item => item?.enddateTimestaps));

   const dispatch = useDispatch();
  const [dates, setDate] = useState(new Date(sendDates));
  const [endDate, setEndDate] = useState(new Date(endDates));

  const [open, setOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [endDateopen, setEndDateopen] = useState(false);
  const [endTimeopen, setEndTimeopen] = useState(false);

  const [picStartdate, setPicStartdate] = useState();
  const [picStarttime, setPicStarttime] = useState();
  const [picEnddate, setPicEnddate] = useState();
  const [picEndtime, setPicEndtime] = useState();

  //console.log("endDate",endDate);

  let date_1 = new Date(endDate);
  let date_2 = new Date(dates);
  let difference = date_1.getTime() - date_2.getTime();
  const days = Math.floor(difference / (24 * 60 * 60 * 1000));
  const temhover = days * 24;
  const daysms = difference % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = difference % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const Dhover = hours + temhover;
  const Dmins = minutes;
 
  const onConvert = str => {
    if (picStartdate == undefined){
      str.setHours(dates.getHours());
      str.setMinutes(dates.getMinutes());
      str.setSeconds(dates.getSeconds());

    }
     setDate(str); 
    let date_1 = new Date(endDate);
    let date_2 = new Date(str);
    let difference = date_1.getTime() - date_2.getTime();
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const temhover = days * 24;
    const daysms = difference % (24 * 60 * 60 * 1000);
    const hourss = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = difference % (60 * 60 * 1000);
    const minutess = Math.floor(hoursms / (60 * 1000));
    const DurationHoverss = hourss + temhover;
    const DurationsMins = minutess;

    var date = new Date(str),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);
    let Postmeridian = hours >= 12 ? 'PM' : 'AM';

    const hourly = hours > 12 ? hours - 12 : hours;
    let picdate = [date.getFullYear(), month, day].join('-');
    let mySQLTime = [hourly, minutes, Postmeridian].join(':'); 
    setPicStartdate(picdate);
    setPicStarttime(mySQLTime);
     const temData = {
      id: dataIndex,
      data: {
        id: dataIndex,
        picStartdate: picdate,
        picStarttime: mySQLTime,
        picEnddate: picEnddate == undefined ? datapicEnddate : picEnddate,
        picEndtime: picEndtime == undefined ? datapicEndtime : picEndtime,
        description: '',
        Durationhovers: DurationHoverss,
        Durationsmin: DurationsMins,
        startdateTimestaps: str.getTime(),
        enddateTimestaps: endDate.getTime(),
      },
    };
    dispatch(Timesheet(temData));
  };

  //convert end date
  const onConvertEnd = str => {
    setEndDate(str);

    let date_1 = new Date(str);
    let date_2 = new Date(dates);
    let difference = date_1.getTime() - date_2.getTime();
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const temhover = days * 24;
    const daysms = difference % (24 * 60 * 60 * 1000);
    const hourss = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = difference % (60 * 60 * 1000);
    const minutess = Math.floor(hoursms / (60 * 1000));
    const DurationHoverss = hourss + temhover;
    const DurationsMins = minutess;

    var date = new Date(str),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);
    let Postmeridian = hours >= 12 ? 'PM' : 'AM';
    const hourly = hours > 12 ? hours - 12 : hours;
    let picdate = [date.getFullYear(), month, day].join('-');
    let mySQLTime = [hourly, minutes, Postmeridian].join(':');
    setPicEnddate(picdate);
    setPicEndtime(mySQLTime);

    const temData = {
      id: dataIndex,
      data: {
        id: dataIndex,
        picStartdate:
          picStartdate == undefined ? datapicDatadate : picStartdate,
        picStarttime:
          picStarttime == undefined ? datapicDatatime : picStarttime,
        picEnddate: picdate,
        picEndtime: mySQLTime,
        description: '',
        Durationhovers: DurationHoverss,
        Durationsmin: DurationsMins,
        startdateTimestaps: dates.getTime(),
        enddateTimestaps: str.getTime(),
      },
    };
    dispatch(Timesheet(temData));
  };

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        return (
          <>
            <View style={styles.startContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.textStart}>Start Date</Text>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={styles.dateContainers}>
                  <Text style={styles.textDate}>
                    {picStartdate != undefined
                      ? picStartdate
                      : item.picStartdate}
                  </Text>
                  <Image
                    style={{height: 24, width: 24}}
                    source={icons.calender}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.textStart}>Start time</Text>
                <TouchableOpacity
                  onPress={() => setTimeOpen(true)}
                  style={styles.timeContainer}>
                  <Text style={styles.textDate}>
                    {picStarttime != undefined
                      ? picStarttime
                      : item.picStarttime}
                  </Text>
                  <Image style={{height: 24, width: 24}} source={icons.time} />
                </TouchableOpacity>
              </View>
            </View>

            <Converteddate
              mode="time"
              date={dates}
              open={timeOpen}
              onConfirm={time => {
                setDate(time);
                onConvert(time);
                setTimeOpen(false);
              }}
              onCancel={() => {
                setTimeOpen(false);
              }}
              maximumDate={endDate}
            />
            <Converteddate
              minimumDate={dates}
              mode="time"
              date={endDate}
              open={endTimeopen}
              onConfirm={time => {
                setEndDate(time);
                onConvertEnd(time);
                setEndTimeopen(false);
              }}
              onCancel={() => {
                setEndTimeopen(false);
              }}
            />
            <Converteddate
              maximumDate={endDate}
              mode="date"
              date={dates}
              open={open}
              onConfirm={date => {
                setDate(date);
                onConvert(date);
                setOpen(false);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Converteddate
              minimumDate={dates}
              mode="date"
              date={endDate}
              open={endDateopen}
              onConfirm={date => {
                setEndDate(date);
                onConvertEnd(date);
                setEndDateopen(false);
              }}
              onCancel={() => {
                setEndDateopen(false);
              }}
            />

            <View style={styles.startContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.textStart}>End Date</Text>
                <TouchableOpacity
                  onPress={() => setEndDateopen(true)}
                  style={styles.dateContainers}>
                  <Text style={styles.textDate}>
                    {picEnddate != undefined ? picEnddate : item.picEnddate}
                  </Text>
                  <Image
                    style={{height: 24, width: 24}}
                    source={icons.calender}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.textStart}>End time</Text>
                <TouchableOpacity
                  onPress={() => setEndTimeopen(true)}
                  style={styles.timeContainer}>
                  <Text style={styles.textDate}>
                    {picEndtime != undefined ? picEndtime : item.picEndtime}
                  </Text>
                  <Image style={{height: 24, width: 24}} source={icons.time} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.textStart}>Project </Text>

            <Text style={styles.textStart}>Total Duration</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                paddingBottom: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#000',
                  marginHorizontal: 5,
                }}>
                {Dhover == 0 && Dmins == 0 ? item.Durationhovers : Dhover}
              </Text>
              <Text>hours</Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#000',
                  marginHorizontal: 5,
                }}>
                {Dmins == 0 && Dhover == 0 ? item.Durationsmin : Dmins}
              </Text>
              <Text>min</Text>
            </View>
          </>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picdateContainer: {
    // height: '0%',

    alignSelf: 'center',
    justifyContent: 'center',

    width: '90%',
    backgroundColor: 'rgba(248, 249, 300, 1)',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(238, 238, 238, 1)',
  },
  hederName: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  logText: {
    color: '#F18900',
    fontSize: 20,
    marginLeft: 10,
  },
  startContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  picdateBox: {
    backgroundColor: '#645CBB',
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    marginRight: 5,
  },
  openButton: {
    backgroundColor: '#EBC7E6',
    alignItems: 'center',
    borderRadius: 10,
  },
  textStart: {color: '#000', fontWeight: '600', margin: 5, fontSize: 16},
  dateContainers: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: 'rgba(238, 238, 238, 1)',
    height: 50,
    borderRadius: 10,
    opacity: 0.7,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-evenly',
  },
  timeContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: 'rgba(238, 238, 238, 1)',
    height: 50,
    borderRadius: 10,
    opacity: 0.7,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-evenly',
  },
  textDate: {fontSize: 15, color: '#000'},
});

// const Allhovers =
//   final.length > 0
//     ? final
//         .map(item => item.map(res => res?.Durationhovers))
//         .reduce((a, b) => {
//           return Number(a) + Number(b) + 0;
//         })
//     : null;
// const Allmin =
//   final.length > 0
//     ? final
//         .map(item => item.map(res => res?.Durationsmin))
//         .reduce((a, b) => {
//           return Number(a) + Number(b);
//         })
//     : null;

// const Durationhoverss =
//   0 < sumHover && (sumHover + (Allhovers * 1)) <= 16 ? sumHover : 0;
// const Durationsmins =
//   0 < sumHover+"."+sumMin && (Durationhoverss + (Allhovers * 1 )+ (Allmin * 1)) < 16.5
//     ? sumMin
//     : 0;

//= 0< (hours + temhover) && (hours + temhover) < 16 ? hours + temhover : 0;
//const Durationsmins =

//0 <minutes && Durationhoverss<16 ? minutes:0;

// let date_1 = new Date(str);
// let date_2 = new Date(dates);
// let difference = date_1.getTime() - date_2.getTime();
// const days = Math.floor(difference / (24 * 60 * 60 * 1000));
// const temhover = days * 24;
// const daysms = difference % (24 * 60 * 60 * 1000);
// const hourss = Math.floor(daysms / (60 * 60 * 1000));
// const hoursms = difference % (60 * 60 * 1000);
// const minutess = Math.floor(hoursms / (60 * 1000));
// const Durationhoversss = hourss + temhover;
// const Durationsminss = minutess;

// console.log('Durationsminss', date_2);
// if (
//   Number(
//     Durationhoversss + Allhovers * 1 + '.' + (Allmin * 1 + Durationsminss),
//   ) <= 16.5 ||
//   (Allhovers == null && min == null)
// ) {

// let date_1 = new Date(endDate);
// let date_2 = new Date(str);
// let difference = date_1.getTime() - date_2.getTime();
// const days = Math.floor(difference / (24 * 60 * 60 * 1000));
// const temhover = days * 24;
// const daysms = difference % (24 * 60 * 60 * 1000);
// const hourss = Math.floor(daysms / (60 * 60 * 1000));
// const hoursms = difference % (60 * 60 * 1000);
// const minutess = Math.floor(hoursms / (60 * 1000));
// const Durationhoversss = hourss + temhover;
// const Durationsminss = minutess;

// if (
//   Number(
//     Durationhoversss + Allhovers * 1 + '.' + (Allmin * 1 + Durationsminss),
//   ) <= 16.5 ||
//   (Allhovers == null && min == null)
// ) {

// } else {
//   alert('Time sheet complate1');
//   setDate(new Date());
// }
// const tem = {
//   id: dataIndex,
//   picdate: picdate,
//   mySQLTime: mySQLTime,
// };
// dispatch(Enddate(tem));

// const tem = {
//   id: dataIndex,
//   picdate: picdate,
//   mySQLTime: mySQLTime,
// };
// dispatch(Startdate(tem));

//  dispatch(Timesheet(changedata));
