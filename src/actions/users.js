import crudData from '../services/crud-data';
import { apiUrl } from '../config';

export const GET_USER_REQUEST = 'GET_USER_REQUEST'; 
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'; 
export const GET_USER_FAILED = 'GET_USER_FAILED'; 

const getUserRequest = ()=>({
  type: GET_USER_REQUEST
});

const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  user
});

export const getUser = id => dispatch =>{
  const url = `${ apiUrl }/users/${ id }`;
  dispatch(getUserRequest());
  crudData(url,'GET')
    .then(res=>res.json())
    .then(payload => {
      //console.log(data);
      dispatch(getUserSuccess(payload.data)); 
    })
    .catch(err => console.log(err));
};
