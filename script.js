import articles from './data.js'

console.log(articles)

let articlesContainer = document.getElementById('grid-container')

articles.forEach((article) => {
  articlesContainer.innerHTML += `<a href="./article.html?id=${article.id}">
      <div class="grid-item">
            <img class="article-image" src="./images/${article.image}" />
            <p class="article-date">${article.date}</p>
            <h2>${article.title}</h2>
            <p class="home-intro">
              ${article.intro}
            </p>
          </div>
  </a>`
})

const queryString = window.location.search
console.log(queryString)
