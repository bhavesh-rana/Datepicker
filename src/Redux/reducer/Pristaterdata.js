import {END_RESULT} from '../action/type';

const INITIAL_STATE = [];

const Pristaterdata = (state = INITIAL_STATE, action) => {
  // console.log(',,,,', action?.payload?.index, state.length);
  switch (action.type) {
    case END_RESULT:
      return state.length == 0
        ? [...state, action?.payload]
        : state.find(item => item.index === action?.payload?.index)
        ? state.map(val =>
            val.index == action?.payload?.index
              ? (state[val.index] = action.payload)
              : val,
          )
        : [...state, action?.payload];
    // : action.payload.index >= state.length
    // ? [...state, action?.payload]
    // : state.map(val =>
    //     val.index == action?.payload?.index
    //       ? (state[val.index] = action.payload)
    //       : val,
    //   );

    default:
      return state;
  }
};

export default Pristaterdata;
// ...state,
//             state.map((value, index) =>
//               action?.payload?.index === value.index
//                 ? action?.payload
//                 : value,
//             ),

// state.length == 0
//         ? [...state, action?.payload]
//         :

// import {TIMESHEET} from '../action/type';

// const INITIAL_STATE = [];
// const Alldatareducer = (state = INITIAL_STATE, action) => {
//   //console.log('state', state[action?.payload?.id]);
//   console.log('=>>>>>>.+', action?.payload);
//  // state.map(it => it.map(res=> console.log("res",res?.id)));
//   //console.log("action?.payload",action?.payload?.id);

//   switch (action.type) {
//     case TIMESHEET:
//       return state.length == 0
//         ? [...state, action?.payload]
//         : action?.payload?.data == undefined
//         ? [...state, action?.payload]
//         : state.map(it =>   it.map(res => res?.id == action?.payload?.id ? state[action?.payload?.id]=action?.payload?.data :res)
//           )
//     default:
//       return state;
//   }
// };
// export default Alldatareducer;
