
export default class NewApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }
    fetchArticles(){
        console.log('Actual search:', this.searchQuery);
        const options = {
            headers: {
              Authorization: "96611445a11e473daa4019771c28da7d"
            },
          
          };
          const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
        return  fetch(url, options)
          .then(response => response.json())
          .then(data => {
            console.log('Data', data.articles);
            this.incrementPage();
          return data.articles || [];
          });
    }
    incrementPage(){
        this.page += 1;
    }
    reset(){
        this.page = 1;
    }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
};
