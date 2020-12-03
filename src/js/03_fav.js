function listenToCards() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    card.addEventListener("click", handleFav);
  }
}

function handleFav(event) {
  let clickedCardID;
  clickedCardID = parseInt(event.currentTarget.id); // Card position in Results array
  const clickedCard = results[clickedCardID]; // All content of that specific card in Results array
  isFav = favList.findIndex(
    (favItem) => favItem.show.id === clickedCard.show.id // This is the SHOW ID inside the object
  );
  if (isFav === -1) {
    favList.push(results[clickedCardID]);
    event.currentTarget.classList.add("highlightCard");
  } else if (isFav > -1) {
    favList.splice(isFav, 1);
    event.currentTarget.classList.remove("highlightCard");
  }
  paintFav();
}

// function highlight(event) {
//   if (favList.includes()) {
//   } else {
//   }

//   event.currentTarget.classList.toggle("highlightCard");
// }

function paintFav() {
  let filledHtml = "";
  for (item = 0; item < favList.length; item++) {
    filledHtml += `<li class="favCard js-favCard" id="${item}">`;
    filledHtml += `<h3 class="favCard__title">${favList[item].show.name}</h3>`;
    if (favList[item].show.image === null) {
      filledHtml += `<img class="favCard__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
    } else {
      filledHtml += `<img class="favCard__img" src="${favList[item].show.image.medium}"/>`;
    }
    filledHtml += "</li>";
  }
  favContainer.innerHTML = filledHtml;
  setLocalStorage();
  listenToFavs();
}

function clearFavs() {
  favContainer.innerHTML = "";
  favList.length = 0;
  setLocalStorage();
  paintResults();
  listenToCards();
}

function listenToFavs() {
  const favCards = document.querySelectorAll(".js-favCard");
  for (const favCard of favCards) {
    favCard.addEventListener("click", removeFav);
  }
}

function removeFav(event) {
  let clickedFavID;
  clickedFavID = parseInt(event.currentTarget.id);
  favList.splice(clickedFavID, 1);
  paintFav();
  console.log({ favList });
}

clearBtn.addEventListener("click", clearFavs);
