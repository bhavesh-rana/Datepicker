const { USERS_DATA } = require("../action/type");

const INITIAL_STATE={
    data:[]
}

const apiCalll=( state= INITIAL_STATE,action)=>{ 
    switch(action.type){
        case USERS_DATA:
         return {... state ,data: action.payload};
         default:
            return state;
    }

}
export default apiCalll;


// const initialState = {
//     count: 0
//   };
  
//   const counterReducer = (state=initialState, action) => {
//    // console.log('====================================');
//    // console.log(action,state );
//    // console.log('====================================');
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...initialState, count: state.count + 1 };
//       case "DECREMENT":
//         return { ...initialState, count: state.count - 1 };
//       case "RESET":
//         return { ...initialState, count: 0 };
//       default:
//         return initialState;
//     }
//   };
  
//   export default counterReducer;
  