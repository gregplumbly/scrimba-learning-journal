import articles from './data.js'

// get the article id from the url
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

console.log(articles[id - 1])

let date = document.getElementById('date')
let title = document.getElementById('title')
let intro = document.getElementById('intro')
let content = document.getElementById('content')
let articleImage = document.getElementById('article-image')

date.innerHTML = articles[id - 1].date
title.innerHTML = articles[id - 1].title
intro.innerHTML = articles[id - 1].intro
content.innerHTML = articles[id - 1].content
articleImage.innerHTML = `<img class="main-image"src="./images/${
  articles[id - 1].image
}" alt="article image" />`

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
