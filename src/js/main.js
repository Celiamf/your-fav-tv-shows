"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const input = document.querySelector(".js-input");
let results = [];

// debugger;
function getData() {
  const inputValue = input.value;
  console.log(inputValue);
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
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
    rsltContainer.innerHTML += `<img src="${result.show.image.medium}"/>`;
    rsltContainer.innerHTML += "</li>";
  }
  console.log("render funciona tb");
}

getData();

btn.addEventListener("click", getData);

// btn.addEventListener("click", getData());
