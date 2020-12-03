"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const searchBox = document.querySelector(".js-input");
const clearBtn = document.querySelector(".js-clearFavBtn");
let results = [];
let favList = [];
let item;
let isFav;

getLocalStorage();
