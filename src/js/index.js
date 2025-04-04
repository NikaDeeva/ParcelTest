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
    const options = {
      method: 'DELETE',
    }
    const r = fetch(`${BASE_URL}/${id}`, options);
    const data = await r.json();
    await startApp();
         } catch (error) {
    console.error(error);
  }
}

// Додавання коментаря до поста
async function createComment(postId, comment) {
  try {
    const rPost = await fetch(`${BASE_URL}/${postId}`);
    const data = await rPost.json();
    data.comments.push({text: comment});
    console.log(data);
  
    const options = {
      method: 'PATCH',
      bodyEl: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const r = await fetch(`${BASE_URL}/${postId}`, options);
    const res = await r.json();
    await startApp();
        // if (!comment) {
    //   console.error("Write a comment");
    //   return;
    // }
    //      const options = {
    //       method: 'POST',
    //       body: JSON.stringify({ "content": comment }),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //      }
    //      const r = await fetch(`${BASE_URL}/${postId}/comments`, options);
    //      const data = await r.json();
    // await startApp();
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
      <button class="editPostButton" data-id="${post.id}">Редагувати</button>
      <button class="deletePostButton" data-id="${post.id}">Видалити</button>
        <h3>Коментарі:</h3>
        <ul>
            ${comments.map(comment => {
              return `<li>${comment.text}</li>`;
            }).join("")}
        </ul>
        <form class="createCommentForm">
          <input type="text" class="commentInput" placeholder="Новий коментар" required>
          <button class="addCommentButton" type="submit">Додати коментар</button>
        </form>
    </div>`;
  });
  document.getElementById('postsContainer').innerHTML = "";
  document.getElementById('postsContainer').insertAdjacentHTML('beforeend', markUp);
  
    }

 document.getElementById('createPostForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#titleInput').value;
  const content = document.querySelector('#contentInput').value;
  createPost(title, content);
 });

 document.querySelector('#postsContainer').addEventListener('click', async (e) => {
  
  e.preventDefault();
  let currentPostId = null;

  if (e.target.classList.contains('deletePostButton')) {
    currentPostId = e.target.dataset.id;
    await deletePost(currentPostId); 
  }
  if (e.target.classList.contains('editPostButton')) {
    currentPostId = e.target.dataset.id;
    const title = prompt('New title');
    const text = prompt('New text');
    await updatePost(currentPostId, title, text);
  }
//   if (e.target.classList.contains('addCommentButton')){
//     const postEl = e.target.closest('.post');
//     const elId = postEl.querySelector('[data-id]');
//     currentPostId = elId.dataset.id;
//     const comment = postEl.querySelector('.commentInput').value;
// await createComment(currentPostId, comment);
// console.log(currentPostId, comment);
// postEl.querySelector('.commentInput').value = '';
//   }
});

document.querySelector('#postsContainer').addEventListener('submit', async (e) => {
  e.preventDefault();
  let currentPostId = null;
  const postEl = e.target.closest('.post');
      const elId = postEl.querySelector('[data-id]');
      currentPostId = elId.dataset.id;
      const comment = postEl.querySelector('.commentInput').value;
  await createComment(currentPostId, comment);
  console.log(currentPostId, comment);
  postEl.querySelector('.commentInput').value = '';
})

async function startApp() {
  const posts = await getPosts();
  renderPosts(posts);
}

startApp();