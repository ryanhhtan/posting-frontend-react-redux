import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from '../actions/users'; 


const usersReducer = (state=[], action)=> {
  switch (action.type) {
    case GET_USER_SUCCESS: 
      return {
        ...state,
        user: action.user
      }
    case GET_USER_REQUEST:
    case GET_USER_FAILED:
    default:
    return state;
  }
};

export default usersReducer; 
