"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const input = document.querySelector(".js-input");
let results = [];

// debugger;
function getData() {
  const inputValue = input.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results = data;
      renderResults();
    });
}

function renderResults() {
  let filledHtml = "";
  for (let result of results) {
    if (result.show.image === null) {
      filledHtml += '<li class="card js-card">';
      filledHtml += `<h3>${result.show.name}</h3>`;
      filledHtml += `<img src="https://via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
      filledHtml += "</li>";
    } else {
      filledHtml += '<li class="card">';
      filledHtml += `<h3>${result.show.name}</h3>`;
      filledHtml += `<img src="${result.show.image.medium}"/>`;
      filledHtml += "</li>";
    }
  }
  rsltContainer.innerHTML = filledHtml;
}

getData();

btn.addEventListener("click", getData);
