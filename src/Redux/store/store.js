import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import Alldatareducer from "../reducer/Alldatareducer";
import appReducer from "../reducer/Combinereducer";
import timeReducer from "../reducer/timeReducer";

 
export const store = createStore(
  appReducer,
  {},
  applyMiddleware(thunk)
);
 
