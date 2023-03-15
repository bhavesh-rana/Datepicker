  const convert=(endDate,startDate)=>{
   // setDate(str);
        let date_1 = new Date(endDate);
       let date_2 = new Date(startDate);
       let difference = date_1.getTime() - date_2.getTime();
       const days = Math.floor(difference / (24 * 60 * 60 * 1000));
       const temhover = days * 24;
       const daysms = difference % (24 * 60 * 60 * 1000);
       const hourss = Math.floor(daysms / (60 * 60 * 1000));
       const hoursms = difference % (60 * 60 * 1000);
       const minutess = Math.floor(hoursms / (60 * 1000));
       const DurationHoverss = hourss + temhover;
       const DurationsMins = minutess;
     //    var date = new Date(str),
    //      month = ('0' + (date.getMonth() + 1)).slice(-2),
    //      day = ('0' + date.getDate()).slice(-2),
    //      hours = ('0' + date.getHours()).slice(-2),
    //      minutes = ('0' + date.getMinutes()).slice(-2);
    //    let Postmeridian = hours >= 12 ? 'PM' : 'AM';
   
    //    const hourly = hours > 12 ? hours - 12 : hours;
    //    let picdate = [date.getFullYear(), month, day].join('-');
    //    let mySQLTime = [hourly, minutes, Postmeridian].join(':');
    //  // console.log("time",mySQLTime);
    //    setPicStartdate(picdate);
    //    setPicStarttime(mySQLTime);
    //   // console.log('Durationhoverss111', DurationHoverss, DurationsMins);
    //    const temData = {
    //      id: dataIndex,
    //      data: {
    //        id: dataIndex,
    //        picStartdate: picdate,
    //        picStarttime: mySQLTime,
    //        picEnddate: picEnddate == undefined ? datapicEnddate : picEnddate,
    //        picEndtime: picEndtime == undefined ? datapicEndtime : picEndtime,
    //        description: '',
    //        Durationhovers: DurationHoverss,
    //        Durationsmin: DurationsMins,
    //        startdateTimestaps: str.getTime(),
    //        enddateTimestaps: endDate.getTime(),
    //      },
    //    };
}

export default convert;