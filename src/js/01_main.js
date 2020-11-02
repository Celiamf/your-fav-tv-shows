"use strict";

const btn = document.querySelector(".js-searchBtn");
const rsltContainer = document.querySelector(".js-searchContainer");
const favContainer = document.querySelector(".js-favContainer");
const input = document.querySelector(".js-input");
const clearBtn = document.querySelector(".js-clearFavBtn");
let results = [];
let item;
let isFav;
let favList = [];

getLocalStorage();
