function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
}

function getLocalStorage() {
  const localFav = localStorage.getItem("favList");
  if (localFav == null) {
    favList = [];
  } else {
    const localFavJson = JSON.parse(localFav);
    favList = localFavJson;
    paintFav();
  }
}
