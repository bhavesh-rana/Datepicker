import { GET_USERS_SUCCESS } from "../action/type"

 
const INITIAL_STATE={
    users:[]
}

const Apicallinsagas = ( state=INITIAL_STATE,action) => {
    console.log("4");
    switch (action.type){
        case GET_USERS_SUCCESS:
            return {...state,users:action.users  };
        default:
            return state;
    }
}

export default Apicallinsagas