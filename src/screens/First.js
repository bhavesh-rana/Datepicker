import { 
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, 
  TouchableOpacity,
  NativeModules,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
 
import {icons} from '../helper/Icons/icons';
import Heder from '../commen/Heder';
import InputBox from './InputBox';
import {useDispatch, useSelector} from 'react-redux';
import {Timesheet} from '../Redux/action/action';

 
const First = () => {
  const dispatch = useDispatch();
  const [dates, setDate] = useState(new Date());
  const [endDates, setEndDate] = useState(new Date());

  const [id, setId] = useState(0);
  const demo = useSelector(state => state?.timeReducer);
  const select = useSelector(state => state?.Alldatareducer);

  //const [open, setOpen] = useState(false);
  // const [timeOpen, setTimeOpen] = useState(false);
  // const [endDateopen, setEndDateopen] = useState(false);
  // const [endTimeopen, setEndTimeopen] = useState(false);

  const [picStartdate, setPicStartdate] = useState();
  const [picStarttime, setPicStarttime] = useState();
  const [picEnddate, setPicEnddate] = useState();
  const [picEndtime, setPicEndtime] = useState();
  const [durationhovers, setDurationhovers] = useState();
  const [durationmin, setDurationmin] = useState();

  const [startdateTimestaps, setStartdateTimestaps] = useState();
  const [enddateTimestaps, setEnddateTimestaps] = useState();

  const [description, setDescription] = useState();
  const [indexs, setIndex] = useState();
  const [arrow, setArrow] = useState(false);

  const [chekConnection, setChekConnection] = useState(false)
  
  // Chek connection 
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //    // console.log("Connection type", state.type);
  //    // console.log("Is connected?", state.isConnected);
  //     setChekConnection(state.isConnected)
  //   }); 
  //    return ()=>{
  //     unsubscribe()
  //    };
  // },[])
  


  useEffect(() => {
    sendStartdate(new Date());
    sendEndDate(new Date());
  }, []);
  useEffect(() => {
    if (picStartdate != undefined && select?.length == 0) {
      addTimesheet();
    }
  }, [picEnddate]);

  const addTimesheet = () => { 
    setId(id + 1); 
    let cons = [
      {
        id: id,
        picStartdate: picStartdate,
        picStarttime: picStarttime,
        picEnddate: picEnddate,
        picEndtime: picEndtime,
        description: description,
        Durationhovers: durationhovers,
        Durationsmin: durationmin, 
        startdateTimestaps: startdateTimestaps,
        enddateTimestaps: enddateTimestaps,
      },
    ];
    dispatch(Timesheet(cons));
    setIndex(id)
    setArrow(true)
    sendStartdate(new Date());
    sendEndDate(new Date());  
  };

  const sendStartdate = str => {
    setDate(str);
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
    setStartdateTimestaps(str.getTime());
  };

  const sendEndDate = str => {
    setEndDate(str);
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
    setEnddateTimestaps(str.getTime());
  };

  useEffect(() => {
    let date_1 = new Date(endDates);
    let date_2 = new Date(dates);
    let difference = date_1.getTime() - date_2.getTime();
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const temhover = days * 24;
    const daysms = difference % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = difference % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const Durationhovers = hours + temhover;
    const Durationsmin = minutes;
    if (Durationhovers >= 0 && Durationsmin >= 0) {
      setDurationhovers(Durationhovers);
      setDurationmin(Durationsmin);
    }
  }, [endDates, dates]);

 // console.log('selectselect', select);
 
  const onSubMit = () => { 
    if(select.length>0){ 
      const allHovers = select
        .map(item => item.map(res => res?.Durationhovers))
        .reduce((a, b) => {
          return Number(a) + Number(b) + 0;
        }); 
      const allMin = select
        .map(item => item.map(res => res?.Durationsmin))
        .reduce((a, b) => {
          return Number(a) + Number(b);
        });
  
      const convertHovers=Math.floor(allMin / 60)+allHovers
      const convertMIn=allMin % 60
 
    const Addtwonu = Number(convertHovers + '.' + convertMIn);
 
    if (Addtwonu > 16) {
      alert('your hovers has been more in your time sheet');
    }
   
  }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <Heder/>
   {/* {chekConnection==true?<Text>online</Text>:<Text>ofline</Text>} */}
      <ScrollView> 
        <View>
          <FlatList
            data={select}
            renderItem={({item, index}) => {
              return (
                <>
                  <View style={styles.picdateContainer}>
                    <View style={styles.hederName}>
                      <Text style={styles.logText}>
                        New Time Log {index + 1}
                      </Text>
                      <TouchableOpacity
                        onPress={() => { 
                          if(indexs!=index){ 
                            setArrow(true)
                            setIndex(index)
                          }
                          else{
                            setArrow(!arrow)
                          } 
                        }}>
                        <Image
                          style={{height: 10, width: 22}}
                          source={
                           ( indexs == index && arrow == true )
                              ? icons.downArrow
                              : icons.upArrow
                          }
                        />
                      </TouchableOpacity>
                    </View>
                    {indexs == index && arrow == true ? (
                      <>
                        <InputBox 
                          data={item}
                          dataIndex={index}
                          select={select} 
                          sendDates={dates}
                          sendEndDates={endDates}
                        />
                      </>
                    ) : null}
                  </View>
                </>
              );
            }}
          />
        </View>
        <TouchableOpacity 
          onPress={addTimesheet}
          style={styles.buttonAdd}>
          <Text style={styles.textAdd}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSubMit}
          style={styles.buttonSubmit}>
          <Text style={styles.textAdd}>SUBMIT</Text>
        </TouchableOpacity>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picdateContainer: {
    // height: '0%',
    marginBottom: 20,
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
  buttonAdd:{
    backgroundColor: '#F18900',
    padding: 10,
    width: '20%',
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonSubmit:{
    backgroundColor: '#F18900',
    padding: 10,
    width: '90%',
     margin: 10,
    borderRadius: 10,
     alignItems: 'center',
  // justifyContent: 'flex-end',
    alignSelf:'center',
  },
  textAdd:{color: '#fff', fontSize: 18}
});
 