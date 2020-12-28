searchBox.addEventListener("keyup", handleSearch);

function handleSearch() {
  getDataFromAPI();
}

function getDataFromAPI() {
  const inputValue = searchBox.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results = data;
      paintResults();
    });
}

function paintResults() {
  let filledHtml = "";
  for (item = 0; item < results.length; item++) {
    let cardShowID = results[item].show.id;
    isFav = favList.findIndex((favItem) => favItem.show.id === cardShowID);
    if (isFav !== -1) {
      filledHtml += `<li class="card highlightCard js-card" id="${item}" aria-label="Click to add favorite" title="Click to add favorite">`;
    } else {
      filledHtml += `<li class="card js-card" id="${item}" aria-label="Click to add favorite" title="Click to add favorite">`;
    }
    filledHtml += `<h3 class="card__title">${results[item].show.name}</h3>`;
    if (results[item].show.image === null) {
      filledHtml += `<img class="card__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
    } else {
      filledHtml += `<img class="card__img" src="${results[item].show.image.medium}"/>`;
    }
    if (results[item].show.rating.average === null) {
      filledHtml += `<p class="card__rating">Rating: Not available</p>`;
    } else {
      filledHtml += `<p class="card__rating">Rating: ${results[item].show.rating.average}</p>`;
    }
    filledHtml += `<a class="card__link" target="_blank" href="${results[item].show.url}">More info</a>`;
    filledHtml += "</li>";
  }
  rsltContainer.innerHTML = filledHtml;
  listenToCards();
}
