"use strict"
const refs = {
  searchForm: document.querySelector('.search'),
  container: document.querySelector('.wrapper'),
  list: document.querySelector('.articles'),
  load: document.querySelector('[data-action="load-more"]')
}
refs.searchForm.addEventListener('submit', onSearch);
refs.load.addEventListener('click', loadMore);
let searchQuery;
function onSearch(e){
  e.preventDefault();
 searchQuery = e.currentTarget.elements.query.value;
  const options = {
    headers: {
      Authorization: "96611445a11e473daa4019771c28da7d"
    },
  
  };
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
  fetch(url, options)
  .then(response => response.json())
  .then(console.log);
}
function loadMore(){
  const options = {
    headers: {
      Authorization: "96611445a11e473daa4019771c28da7d"
    },
  
  };
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
  fetch(url, options)
  .then(response => response.json())
  .then(console.log);
}