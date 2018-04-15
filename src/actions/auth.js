import { baseUrl, apiGrant } from '../config'
import crudData  from '../services/crud-data';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";

//const auth_url = 'https://posting-laravel-backend.herokuapp.com/oauth/token';
const authUrl = `${ baseUrl }/oauth/token`; 

const loginRequest = ({
  type: LOGIN_REQUEST,
});

const loginSuccess = credential => ({
  type: LOGIN_SUCCESS,
  credential
});

export const fetchAuthToken = (username, password) => dispatch => {
  dispatch(loginRequest);
  const body = {
    ...apiGrant,
    username,
    password,
    scope:''
  };

  crudData(authUrl, 'post', body, false)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('credential', JSON.stringify(data));
      dispatch(loginSuccess(data));
    })
    .catch(err => console.log(err));
}; 

export const logout = () => {
  localStorage.removeItem('credential');
  return {
  type: LOGOUT
  }
};
