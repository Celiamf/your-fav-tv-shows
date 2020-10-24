// ----- Activates actions when Search button is clicked
function handleSearch() {
  getData();
  renderResults();
  listenToCards();
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
    });
}

// ----- Shows name & image for every search result
function renderResults() {
  let filledHtml = "";
  for (let index = 0; index < results.length; index++) {
    filledHtml += `<li class="card js-card" id="${[index]}">`;
    filledHtml += `<h3>${results[index].show.name}</h3>`;
    if (results[index].show.image === null) {
      filledHtml += `<img src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
    } else {
      filledHtml += `<img src="${results[index].show.image.medium}"/>`;
    }
    filledHtml += "</li>";
    rsltContainer.innerHTML = filledHtml;
  }
}

// ----- Listens to click on Search button
btn.addEventListener("click", handleSearch);
