const crudData = (url, method, body=null, authRequired=true)=> {
  const storedCredential = localStorage.getItem('credential');
  const credential = storedCredential ? JSON.parse(storedCredential) : null;
  if (authRequired && !credential)
    return Promise.reject(new Error('No valid token'));

  //console.log(credential);
  const headers = {
    'content-type': 'application/json',
    'accept': 'application/json',
    ...authRequired && {
      'Authorization': `Bearer ${ credential.access_token }`
    }
  };


  const options = {
    headers,
    method,
    ...body && { 
      body: JSON.stringify(body) 
    },
  };
  //console.log(options);
  
  return fetch(url, options);
};

export default crudData;
