import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from '../actions/auth';

const storedCredential = localStorage.getItem('credential');
const credential = storedCredential ? storedCredential : {};
const loggedin = storedCredential && true; 

const initState = {
  fetching: false,
  loggedin,
  credential
};

const authReducer = (state=initState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      //console.log('fetching');
      return {
        ...state,
        fetching: true
      };
    case LOGIN_SUCCESS:
      //console.log(action.credential);
      return {
        ...state,
        fetching: false,
        loggedin: true,
        credential: action.credential 
      };
    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        loggedin: false
      };
    case LOGOUT:
      return {
        ...state,
        loggedin: false,
        credential: null 
      }

    default:
      return state;
  }
}

export default authReducer;
