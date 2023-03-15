import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Alldatareducer from "../reducer/Alldatareducer";
import appReducer from "../reducer/Combinereducer";
import timeReducer from "../reducer/timeReducer";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas/sagas";

const sagaMiddleware =createSagaMiddleware();

console.log("5")
export const store = createStore(
  appReducer, 
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas)
console.log("6");

// import {createStore, applyMiddleware} from 'redux';
// import counterReducer from '../reducer/Apicallreducer';
// import thunk from 'redux-thunk';

// const store = createStore(counterReducer, {}, applyMiddleware(thunk));

// export default store;
