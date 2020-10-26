function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
  console.log(favList, "Esto es lo que guarda en el LS");
}

// function getLocalStorage() {
//   const localFav = localStorage.getItem("favList");
//   const localFavJson = JSON.parse(localFav);
//   console.log(localFavJson, "Esto es lo que trae del LS");
//   if (localFavJson !== null) {
//     // paintFav(favContainer, favCardClass, clickedCardID);
//   }
//   //favList = lo que traiga del localS
//   paintFav();
// }

// getLocalStorage();
