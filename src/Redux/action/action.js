import { ENDDATE, STARTDATE, TIMESHEET, } from "./type"; 
export const Enddate = request => async dispatch => {
    
  dispatch({type:ENDDATE, payload: request});
 
};

export const Timesheet = request => async dispatch => {
    
    dispatch({type:TIMESHEET, payload: request});
   
  };

  



export const Startdate = request => async dispatch => {
    
    dispatch({type:STARTDATE, payload: request});
   
  };
  