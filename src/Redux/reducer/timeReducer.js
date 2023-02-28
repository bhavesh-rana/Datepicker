import {ENDDATE, STARTDATE, TIMESHEET} from '../action/type';

const INITIAL_STATE = {
  getStartdate: [],

  getEnddate: [],
};

 const timeReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENDDATE:
      return {...state, getEnddate: action?.payload};
    case STARTDATE:
      return {
        ...state,
        getStartdate: action?.payload,
      };

    default:
      return state;
  }
};
export default timeReducer