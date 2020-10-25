"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const input = document.querySelector(".js-input");
let results = [];
let favList = [];
// let clickedCardID;
let favCardID;
let filledHtml = "";
let item;
let cardClass = "card";
let favCardClass = "favCard";
