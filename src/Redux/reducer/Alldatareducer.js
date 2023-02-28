import {TIMESHEET} from '../action/type';

const INITIAL_STATE = [];
const Alldatareducer = (state = INITIAL_STATE, action) => {
  //console.log('state', state[action?.payload?.id]);
  console.log('=>>>>>>.+', action?.payload);
 // state.map(it => it.map(res=> console.log("res",res?.id)));
  //console.log("action?.payload",action?.payload?.id);

  switch (action.type) {
    case TIMESHEET:
      return state.length == 0
        ? [...state, action?.payload]
        : action?.payload?.data == undefined
        ? [...state, action?.payload]
        : state.map(it =>   it.map(res => res?.id == action?.payload?.id ? state[action?.payload?.id]=action?.payload?.data :res)
          )
    default:
      return state;
  }
};
export default Alldatareducer;
