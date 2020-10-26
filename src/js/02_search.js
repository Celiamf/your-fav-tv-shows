// ----- Listens to click on Search button
btn.addEventListener("click", handleSearch);

// ----- Activates actions when Search button is clicked
function handleSearch() {
  getData();
}

// ----- Brings in data from API & puts them into json form
function getData() {
  const inputValue = input.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results = data;
      paintResults();
      listenToCards();
    });
}

// ----- Shows name & image for every search result
function paintResults() {
  let filledHtml = "";
  for (item = 0; item < results.length; item++) {
    // si es fav le meto la clase
    filledHtml += `<li class="card js-card" id="${item}">`;
    filledHtml += `<h3 class="card__title">${results[item].show.name}</h3>`;
    if (results[item].show.image === null) {
      filledHtml += `<img class="card__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
    } else {
      filledHtml += `<img class="card__img" src="${results[item].show.image.medium}"/>`;
    }
    filledHtml += "</li>";
  }
  rsltContainer.innerHTML = filledHtml;
}
