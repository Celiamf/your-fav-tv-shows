function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
  console.log(favList);
}

function getLocalStorage() {
  const localFav = localStorage.getItem("favList");
  const localFavJson = JSON.parse(localFav);
  console.log(localFavJson);
  if (localFavJson !== null) {
    paintFav(favContainer, favCardClass, clickedCardID);
  }
}
