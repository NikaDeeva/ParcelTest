"use strict"

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

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify({
//     age: 100,
//     email: 'feature@gmail.com'
//   }),
//   headers: {
//     "Content-Type": "application/json"
//       }
// };
// fetch(`${BASE_URL}/3`, options)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// GET
// fetch("https://jsonplaceholder.typicode.com/albums/85")
//     .then(response => response.json())
//     .then(data => console.log(data));


// POST
// const postAdd = {
//     author: "Anna",
//     body: "CRUD",
// }

// const options = {
//   method: "POST",
//     body: JSON.stringify(postAdd),
//     headers: {
//       "Content-Type": "application/json"
//   }
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     author: "Anna",
//       body: "CRUD",
//       title: 'Title',
//     userId:100,
//   }),
// })
//   .then((r) => r.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error)); //{author: 'Anna', body: 'CRUD', id: 101}


// PUT
// const postAdd = {
//     author: "Anna",
//     body: "CRUD new",
//     id: 2,
// }

// const options = {
//   method: "PATCH",
//     body: JSON.stringify(postAdd),
//     headers: {
//       "Content-Type": "application/json"
//   }
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postAdd.id}`, options)
//     .then(r => r.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));
    //{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'CRUD new', author: 'Anna'}




// Delete
// const deletePost = 200;
// const options = {
//     method: "DELETE"
// }
// fetch(`https://jsonplaceholder.typicode.com/posts/${deletePost}`, options)
//     .then(() => console.log('Post deleted'))
//     .catch(error => console.log(error));

const BASE_URL = 'http://localhost:3000/students';

async function getAllStudents(){
  try{
    const r = await fetch(BASE_URL);
    const data = await r.json();
    console.log(data);
  } catch(error){
console.log(error);
  }
};
getAllStudents();

async function getStudentById(){
  try{
    const r = await fetch(`${BASE_URL}/${id}`);
    const data = await r.json();
    console.log(data);
  } catch(error){
    console.log(error);
  }
};
 getStudentById();

async function addStudent(student){
  try{
    const r = await fetch(`${BASE_URL}`, {
      method: `POST`,
      headers: {
"Content-Type": 'application/json'
      },
      body: JSON.stringify(student),
    });
    const data = await r.json();
    console.log(data);
  } catch (error){
    console.log(error);
  }
};

async function updateStudent(id, updated){
  try{
    const r = await fetch(`${BASE_URL}/${id}`, {
      method: `PUT`,
      headers: {
"Content-Type": 'application/json'
      },
      body: JSON.stringify(updated),
    });
    const data = await r.json();
    console.log(data);
  } catch (error){
    console.log(error);
  }
};

async function updateStudent(id, patched){
  try{
    const r = await fetch(`${BASE_URL}/${id}`, {
      method: `PATCH`,
      headers: {
"Content-Type": 'application/json'
      },
      body: JSON.stringify(patched),
    });
    const data = await r.json();
    console.log(data);
  } catch (error){
    console.log(error);
  }
};

async function updateStudent(id){
  try{
    const r = await fetch(`${BASE_URL}/${id}`, {
      method: `DELETE`
    });
    console.log(id);
  } catch (error){
    console.log(error);
  }
};