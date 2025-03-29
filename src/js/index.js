"use strict"
import { basePost } from "./posts.js";
const BASE_URL = 'http://localhost:3000/posts';
 async function getPosts() {
  try {
    const r = await fetch(BASE_URL);
    const posts = await r.json();
    return posts;
        } catch (error) {
    console.error(error);
  }
}
// Створення нового поста
async function createPost(title, content) {
  try {
    const bodyEl = JSON.stringify(new basePost(title, content));
    const options = {
      method: 'POST',
      body: bodyEl,
      headers:{
        "Content-Type": "application/json"
      }
    }
    const r = fetch(`${BASE_URL}`, options);
    const data = await r.json();
    await startApp();
        } catch (error) {
    console.error(error);
  }
}

// Оновлення поста
async function updatePost(id, title, content) {
  try {
    const bodyEl = JSON.stringify(new basePost(title, content));
    const options = {
      method: 'PATCH',
      body: bodyEl,
      headers:{
        "Content-Type": "application/json"
      }
    }
    const r = fetch(`${BASE_URL}/${id}`, options);
    const data = await r.json();
    await startApp();

         } catch (error) {
    console.error(error);
  }
}
// Видалення поста
async function deletePost(id) {
  try {
         } catch (error) {
    console.error(error);
  }
}

// Додавання коментаря до поста
async function createComment(postId, comment) {
  try {
         
  } catch (error) {
    console.error(error);
  }
}

// Оновлення відображення постів на сторінці
function renderPosts(posts) {
  const markUp = posts.map(post => {
    const comments = post.comments;
    return ` <div class="post">
      <h2 class="postTitle">${post.title}</h2>
      <p class="postText">${post.text}</p>
      <button class="deletePostButton" data-id="${post.id}">Видалити</button>
      <button class="editPostButton" data-id="${post.id}">Редагувати</button>
      <div class="commentsContainer" data-id="${post.id}">
        <h3>Коментарі:</h3>
        <ul>
            ${comments.map(comment => {
              return `<li>${comment.content}</li>`;
            }).join("")}
        </ul>
        <form class="createCommentForm">
          <input type="text" class="commentInput" placeholder="Новий коментар" required>
          <button type="submit">Додати коментар</button>
        </form>
      </div>
    </div>`;
  });
document.getElementById('postsContainer').insertAdjacentHTML('beforeend', markUp);
    }
// Обробник події для створення поста
 document.getElementById('createPostForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#titleInput').value;
  const content = document.querySelector('#contentInput').value;
  createPost(title, content);
 });

 document.querySelector('#postsContainer').addEventListener('click', (e) => {
  let currentPostId = null;
  if (e.target.nodeName !== 'DIV'){
    currentPostId = e.target.dataset.id;
    document.querySelector('.editPostButton').addEventListener('click', (e) => {
      const title = prompt('New title');
      const text = prompt('New text');
      updatePost(currentPostId, title, text);
     })
  }
 });
// // Обробник події для редагування поста
// document.querySelector('#postsContainer').addEventListener('click', (e) => {
//   let currentPostId = null;
//   if (e.target.nodeName !== 'DIV'){
//     currentPostId = e.target.dataset.id;
//     document.querySelector('.updatingForm').style.display = 'block';
//     // document.querySelector('.updateButton').addEventListener('click', () => {
//     //   const title = document.querySelector('#titleEdit').value;
//     //     const content = document.querySelector('#contentEdit').value;
//     //     updatePost(postId, title, content);
//     //     console.log(postId);
//         // return;
//     // });
//     // document.querySelector('.updateButton').addEventListener('click', () => {
//     //   let currentPostId = e.target.closest('.post');
//     //   document.querySelector(`${currentPostId}`)
//     // })
//   }
// });

// const editForm = document.querySelector(".updatingForm");
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // const id = e.target.contains.;
// if (e.target.classList.contains())
//   const title = document.querySelector('#titleEdit').value;
//   const content = document.querySelector('#contentEdit').value;
//   updatePost(id, title, content);
// });

// // Обробник події для видалення поста
// document.addEventListener('click', cb);

// // Обробник події для додавання коментаря
// document.addEventListener('submit', cb);
// Запуск додатку
async function startApp() {
  const posts = await getPosts();
  renderPosts(posts);
}

startApp();