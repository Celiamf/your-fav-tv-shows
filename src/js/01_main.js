"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const input = document.querySelector(".js-input");
let results = [];
let item;
let clickedCardID;
let cardClass = "card";
let favCardClass = "favCard";
let favList = [
  // {
  //   show: {
  //     name: "",
  //     image: "",
  //   },
  // },
];

getLocalStorage();
