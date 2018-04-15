export const baseUrl = process.env.REACT_APP_BACKEND_DEV_BASE_URL 
  ? process.env.REACT_APP_BACKEND_DEV_BASE_URL 
  : process.env.REACT_APP_BACKEND_PROD_BASE_URL; 
export const apiUrl = `${baseUrl}/api`;
export const apiGrant = {
    grant_type: process.env.REACT_APP_API_GRANT_TYPE,
    client_id: process.env.REACT_APP_API_CLIENT_ID,
    client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
}; 
