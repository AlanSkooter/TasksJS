'use strict';

let albumsArr = [];

const getRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      data.forEach((album) => {
        if (album.userId === 1 || album.userId === 4) {
          albumsArr.push(album);
        }});
      console.log(albumsArr);
    }  
  } catch (err) {
    console.log('Error', err);
  }
}