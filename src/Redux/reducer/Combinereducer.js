import {combineReducers} from 'redux';

import Alldatareducer from './Alldatareducer';
import Apicallinsagas from './Apicallinsagas';
import apiCalll from './Apicallreducer';
import countReducer from './Apicallreducer';
import Pristaterdata from './Pristaterdata';
import timeReducer from './timeReducer';

const appReducer = combineReducers({
  Alldatareducer: Alldatareducer,
  timeReducer: timeReducer,
  count: countReducer,
  data: Pristaterdata,
  apiCalll:apiCalll,
  Apicallinsagas:Apicallinsagas
});

export default appReducer;
