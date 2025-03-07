"use strict"
import NewApiService from './search';

const refs = {
  searchForm: document.querySelector('.search'),
  container: document.querySelector('.wrapper'),
  list: document.querySelector('.articles'),
  load: document.querySelector('[data-action="load-more"]')
}
const newsApiService = new NewApiService();
refs.searchForm.addEventListener('submit', onSearch);
refs.load.addEventListener('click', loadMore);
function onSearch(e){
  e.preventDefault();
  cleanArticles();
 newsApiService.query = e.currentTarget.elements.query.value;
 newsApiService.reset();
 newsApiService.fetchArticles().then(articleMarkup);
  
}
function loadMore(){
  newsApiService.fetchArticles().then(articleMarkup);
}
function articleMarkup(articles){
  console.log(articles);
const source = document.getElementById('articles-template').innerHTML;
const template = Handlebars.compile(source);
const markUp = template(articles);
refs.list.insertAdjacentHTML('beforeend', markUp);

}
function cleanArticles(){
  refs.list.innerHTML = '';
}