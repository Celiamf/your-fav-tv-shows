"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
let results = [];

function getData() {
  fetch("http://api.tvmaze.com/search/shows?q=girls")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.length);
      results = data;
      renderResults();
    });
}

function renderResults() {
  for (let result of results) {
    rsltContainer.innerHTML += "<li>";
    rsltContainer.innerHTML += `<h3>${result.show.name}</h3>`;
    rsltContainer.innerHTML += `<img src="${result.image}"/>`;
    rsltContainer.innerHTML += "</li>";
  }
  console.log("render funciona tb");
}

getData();

// btn.addEventListener("click", handleSearch());

// btn.addEventListener("click", getData());
