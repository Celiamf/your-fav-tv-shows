// ----- Listens to click event on each search result card
function listenToCards() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    card.addEventListener("click", handleFav);
  }
}

// ----- Saves & highlights clicked card into the favorite list array or clears it if it's already saved
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
    paintFav();
  }
}

// ----- Shows clicked card under "My favorites"
function paintFav() {
  favContainer.innerHTML = "";
  for (const clickedID of favList) {
    paint(favContainer, favCardClass, clickedID);
  }
  setLocalStorage();
}
