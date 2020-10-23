"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const input = document.querySelector(".js-input");
let results = [];

// debugger;
function getData() {
  const inputValue = input.value;
  // console.log(inputValue);
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.length);
      results = data;
      renderResults();
    });
}

function renderResults() {
  let filledHtml = "";
  for (let result of results) {
    filledHtml += "<li>";
    filledHtml += `<h3>${result.show.name}</h3>`;
    filledHtml += `<img src="${result.show.image.medium}"/>`;
    filledHtml += "</li>";
  }
  rsltContainer.innerHTML = filledHtml;
  // console.log("render funciona tb");
}

getData();

btn.addEventListener("click", getData);

// btn.addEventListener("click", getData());
