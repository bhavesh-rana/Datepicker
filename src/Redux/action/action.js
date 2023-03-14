import {makeAPIRequest} from '../../helper/Globalfunstion';
import {
  ENDDATE,
  END_RESULT,
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  STARTDATE,
  TIMESHEET,
  USERS_DATA,
} from './type';
export const Enddate = request => async dispatch => {
  dispatch({type: ENDDATE, payload: request});
};
export const Timesheet = request => async dispatch => {
  dispatch({type: TIMESHEET, payload: request});
};
export const Startdate = request => async dispatch => {
  dispatch({type: STARTDATE, payload: request});
};

export const Usersdata = request => async dispatch => {
  return makeAPIRequest({
    url: `https://dummyjson.com/users`,
  })
    .then(response => {
      dispatch({type: USERS_DATA, payload: response?.data});
    })
    .catch(er => console.log(er));
};

export const incrementTotal = requast => dispatch => {
  //// console.log('====================================');
  console.log('dd', requast);
  //  console.log('====================================');
  dispatch({type: requast, payload: '1'});
};

export const endResult = request => async dispatch => {
  dispatch({type: END_RESULT, payload: request});
};

export const getUserFetch = request => (
  console.log('call action GET_USERS_FETCH'),
  {
    type: GET_USERS_FETCH,
    payload: request,
  }
);
console.log("[[[]]]]");