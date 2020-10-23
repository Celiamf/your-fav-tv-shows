"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const input = document.querySelector(".js-input");
let results = [];
let favList = [];
let clickedCard;

function handleSearch() {
  getData();
  renderResults();
}

function getData() {
  const inputValue = input.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results = data;
      // renderResults(); <--- ESTO LO PUSE AQUÍ ORIGINALLY Y LUEGO LO MOVÍ DENTRO DE HANDLESEARCH --- CHECK
      listenToCards();
    });
}

function renderResults() {
  for (let index = 0; index < results.length; index++) {
    let filledHtml = "";
    for (let result of results) {
      if (result.show.image === null) {
        filledHtml += `<li class="card js-card" id="${[index++]}">`;
        filledHtml += `<h3>${result.show.name}</h3>`;
        filledHtml += `<img src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
        filledHtml += "</li>";
      } else {
        filledHtml += `<li class="card js-card" id="${[index++]}">`;
        filledHtml += `<h3>${result.show.name}</h3>`;
        filledHtml += `<img src="${result.show.image.medium}"/>`;
        filledHtml += "</li>";
      }
    }
    rsltContainer.innerHTML = filledHtml;
  }
}

// getData(); <--- ESTO LO PUSE AQUÍ ORIGINALLY Y LUEGO LO MOVÍ DENTRO DE HANDLESEARCH --- CHECK

// 1º Guarda las tarjetas clickadas en un array & convierte el ID en número
// 2º Condicional: si el indexOf devuelve > -1 es que la tarjeta seleccionada sí está en el array, entonces hay que AÑADIRLE la clase favCard

function handleFav(event) {
  clickedCard = parseInt(event.currentTarget.id);
  const isFav = favList.indexOf(clickedCard);
  if (isFav === -1) {
    favList.push(clickedCard);
    event.currentTarget.classList.add("favCard");
  } else if (isFav > -1) {
    favList.splice(isFav, 1);
    event.currentTarget.classList.remove("favCard");
  }
}

function listenToCards() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    card.addEventListener("click", handleFav);
  }
}

btn.addEventListener("click", handleSearch);
