import axios from 'axios';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_USERS_FETCH, GET_USERS_SUCCESS} from '../action/type';
import {makeAPIRequest} from '../../helper/Globalfunstion';
function* fetchData() {
  console.log('call 2');
  // const users = yield axios
  //   .get('https://dummyjson.com/users')
  //   .then(response => response);
  const users = yield makeAPIRequest({url: `https://dummyjson.com/users`}).then(
    response => response?.data?.users,
  );

  yield put({type: GET_USERS_SUCCESS, users});
}

function* sagas() {
  console.log('call 1');
  yield takeEvery(GET_USERS_FETCH, fetchData);
  console.log('call 1.3');
}
export default sagas;
console.log(sagas());
// return makeAPIRequest({
//   url: `https://dummyjson.com/users`,
// })
//   .then(response => {
//     dispatch({type: USERS_DATA, payload: response?.data});
//   })
//   .catch(er => console.log(er));
