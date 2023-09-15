import articles from './data.js'

let recentPosts = document.getElementById('recent-posts-grid-container')

// select 3 articles from the array
let recentArticles = articles.slice(0, 3)

recentArticles.forEach((article) => {
  recentPosts.innerHTML += `<a href="/article.html?id=${article.id}">
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
