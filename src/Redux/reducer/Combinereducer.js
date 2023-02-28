import {combineReducers} from 'redux';

import Alldatareducer from './Alldatareducer';
import timeReducer from './timeReducer';

const appReducer = combineReducers({
  Alldatareducer: Alldatareducer,
  timeReducer: timeReducer,
});

export default appReducer;
