// ----- Listens to click event on each search result card
function listenToCards() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    card.addEventListener("click", handleFav);
  }
}

function handleFav() {
  saveFav();
}

// ----- Removes clicked card from "My favorites"
function clearFav() {
  favContainer.innerHTML = ""; // Elimina TODAS las favoritas
}

// ----- Saves & highlights the clicked card into the favorite list array or removes it if it's already saved
function handleFav(event) {
  clickedCardID = parseInt(event.currentTarget.id);
  const isFav = favList.indexOf(clickedCardID);
  if (isFav === -1) {
    favList.push(clickedCardID);
    event.currentTarget.classList.add("highlightCard");
    paintFav();
  } else if (isFav > -1) {
    favList.splice(isFav, 1);
    event.currentTarget.classList.remove("highlightCard");
    clearFav();
  }
  setLocalStorage();
}

// ----- Shows clicked card under "My favorites"
let filledFavHtml = "";
function paintFav() {
  filledFavHtml += `<li class="card favCard js-card" id="${clickedCardID}">`;
  filledFavHtml += `<h3 class="favCard__title">${results[clickedCardID].show.name}</h3>`;
  if (results[clickedCardID].show.image === null) {
    filledFavHtml += `<img class="favCard__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
  } else {
    filledFavHtml += `<img class="favCard__img" src="${results[clickedCardID].show.image.medium}"/>`;
  }
  filledFavHtml += "</li>";
  favContainer.innerHTML = filledFavHtml;
}
