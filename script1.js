'use strict';

const getRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }  else {
      console.log('Request is not success');
    }
  } catch (err) {
    console.log('Error', err);
  }
}

getRequest();

const postRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
          name: "Kalinina Kate",
          email: "queenkate@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }  
  } catch (err) {
    console.log('Error', err);
  }
}

postRequest();

const putRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: 'PUT',
      body: JSON.stringify({
          name: "Kalinina Kate",
          email: "queenkate@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }  
  } catch (err) {
    console.log('Error', err);
  }
}

putRequest();

const patchRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: 'PATCH',
      body: JSON.stringify({
          email: "katequeen@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }  
  } catch (err) {
    console.log('Error', err);
  }
}

patchRequest();

const deleteRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: 'DELETE',
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }  
  } catch (err) {
    console.log('Error', err);
  }
}

deleteRequest();