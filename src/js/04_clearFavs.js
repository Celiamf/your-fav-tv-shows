clearBtn.addEventListener("click", resetFavs);

function resetFavs() {
  favContainer.innerHTML = "";
  favList.length = 0;
  setLocalStorage();
  paintResults();
}

function clearClickedFav(event) {
  let clickedFavID;
  clickedFavID = parseInt(event.currentTarget.id);
  favList.splice(clickedFavID, 1);
  paintFav();
  paintResults();
}
