"use strict";
import { basePost } from "./posts.js";
const BASE_URL = "http://localhost:3001/posts";

async function getPosts() {
  try {
    const r = await fetch(BASE_URL);
    const posts = await r.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

async function createPost(title, content) {
  try {
    const bodyEl = JSON.stringify(new basePost(title, content));
    const options = {
      method: "POST",
      body: bodyEl,
      headers: { "Content-Type": "application/json" },
    };
    const r = await fetch(BASE_URL, options);
    await r.json();
    await startApp();
  } catch (error) {
    console.error(error);
  }
}

async function updatePost(id, title, content) {
  try {
    const bodyEl = JSON.stringify(new basePost(title, content));
    const options = {
      method: "PATCH",
      body: bodyEl,
      headers: { "Content-Type": "application/json" },
    };
    const r = await fetch(`${BASE_URL}/${id}`, options);
    await r.json();
    await startApp();
  } catch (error) {
    console.error(error);
  }
}

async function deletePost(id) {
  try {
    const options = { method: "DELETE" };
    const r = await fetch(`${BASE_URL}/${id}`, options);
    await r.json();
    await startApp();
  } catch (error) {
    console.error(error);
  }
}

async function createComment(postId, comment) {
  try {
    const rPost = await fetch(`${BASE_URL}/${postId}`);
    const data = await rPost.json();
    data.comments = data.comments || [];
    data.comments.push({ text: comment });

    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    const r = await fetch(`${BASE_URL}/${postId}`, options);
    await r.json();
    await startApp();
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts) {
  document.getElementById("postsContainer").innerHTML = "";
  const markUp = posts.map((post) => {
    const comments = post.comments || [];
    return `<div class="post">
      <h2 class="postTitle">${post.title}</h2>
      <p class="postText">${post.text}</p>
      <button class="editPostButton" data-id="${post.id} type="button">Редагувати</button>
      <button class="deletePostButton" data-id="${post.id} type="button">Видалити</button>
        <h3>Коментарі:</h3>
        <ul>
            ${comments.map(comment => `<li>${comment.text}</li>`).join("")}
        </ul>
        <form class="createCommentForm" data-id="${post.id}">
          <input type="text" class="commentInput" placeholder="Новий коментар" required>
          <button class="addCommentButton" type="submit">Додати коментар</button>
        </form>
    </div>`;
  });
  document
    .getElementById("postsContainer")
    .insertAdjacentHTML("beforeend", markUp.join(""));
}

document.getElementById("createPostForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#titleInput").value;
  const content = document.querySelector("#contentInput").value;
  createPost(title, content);
});

document.querySelector("#postsContainer").addEventListener("click", async (e) => {
  e.preventDefault();
  let currentPostId = e.target.dataset.id;

  if (e.target.classList.contains("deletePostButton")) {
    await deletePost(currentPostId);
  }

  if (e.target.classList.contains("editPostButton")) {
    const title = prompt("New title", "Новий заголовок");
    const text = prompt("New text", "Новий текст");
    if (title && text) {
      await updatePost(currentPostId, title, text);
    }
  }
});

document.querySelector("#postsContainer").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (e.target.classList.contains("createCommentForm")) {
    const currentPostId = e.target.dataset.id;
    const commentInput = e.target.querySelector(".commentInput");
    const comment = commentInput.value;
    console.log(comment)
    if (comment) {
      await createComment(currentPostId, comment);
      commentInput.value = "";
    }
  }
});

async function startApp() {
  const posts = await getPosts();
  renderPosts(posts);
}

startApp();
