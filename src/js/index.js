"use strict"
const BASE_URL = 'http://localhost:3000/students';

// fetch(BASE_URL)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// fetch(`${BASE_URL}/1`)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// const newSt = {
//   name: 'Miranda Vera',
//   age: 20,
//   email: 'miranda.vera@gmail.com',
//   phone: '555-3821',
// };
// const options = {
//   method: 'POST',
//   body: JSON.stringify(newSt),
//   headers: {
//   "Content-Type": "application/json"
//   }
// };
// fetch(BASE_URL, options)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// fetch(BASE_URL)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// const st = {
//   name: 'Miranda Vera',
//   age: 20,
//   email: 'miranda.vera@gmail.com',
//   phone: '555-3821',
// }
// const options = {
//   method: 'PUT',
//   body: JSON.stringify(st),
//   headers: {
// "Content-Type": "application/json"
//   }
// }
// fetch(`${BASE_URL}/2`, options)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

const options = {
  method: 'PATCH',
  body: JSON.stringify({
    age: 100,
    email: 'feature@gmail.com'
  }),
  headers: {
    "Content-Type": "application/json"
      }
};
fetch(`${BASE_URL}/3`, options)
.then(r => r.json())
.then(data => console.log(data))
.catch(error => console.error(error));