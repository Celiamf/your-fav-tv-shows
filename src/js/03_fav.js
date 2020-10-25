// ----- Listens to click event on each search result card
function listenToCards() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    card.addEventListener("click", handleFav);
  }
}

// // ----- Saves & highlights clicked card into the favorite list array or removes it if it's already saved
function handleFav(event) {
  item = parseInt(event.currentTarget.id);
  const isFav = favList.indexOf(item);
  if (isFav === -1) {
    favList.push(item);
    event.currentTarget.classList.add("highlightCard");
    paintFav();
  } else if (isFav > -1) {
    favList.splice(isFav, 1);
    event.currentTarget.classList.remove("highlightCard");
    clearFav();
  }
}

// ----- Shows clicked card under "My favorites"
function paintFav() {
  filledHtml = "";
  for (item = 0; item < favList.length; item++) {
    paint(favContainer, favCardClass);
  }
  setLocalStorage();
}

// ----- Removes clicked card from "My favorites"
function clearFav() {
  favContainer.innerHTML = ""; // Elimina TODAS las favoritas
}
