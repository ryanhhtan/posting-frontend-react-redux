import { combineReducers } from 'redux';
import authReducer from './authReducer'
import usersReducer from './usersReducer'; 

const rootReducer = combineReducers({
  authReducer,
  usersReducer
});

export default rootReducer;
