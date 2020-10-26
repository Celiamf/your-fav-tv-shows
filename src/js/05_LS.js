function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
}

function getLocalStorage() {
  const localFav = localStorage.getItem("favList");
  const localFavJson = JSON.parse(localFav);
  favList = localFavJson;
  paintFav();
}
