// ----- Listens to click on Search button
btn.addEventListener("click", handleSearch);

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
  for (item = 0; item < results.length; item++) {
    paint(rsltContainer, cardClass);
  }
}

function paint(htmlContainer, className) {
  filledHtml += `<li class="${className} js-card" id="${[item]}">`;
  filledHtml += `<h3 class="${className}__title">${results[item].show.name}</h3>`;
  if (results[item].show.image === null) {
    filledHtml += `<img class="${className}__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
  } else {
    filledHtml += `<img class="${className}__img" src="${results[item].show.image.medium}"/>`;
  }
  filledHtml += "</li>";
  htmlContainer.innerHTML = filledHtml;
}

// let filledHtml = "";
// function renderResults() {
//   for (let index = 0; index < results.length; index++) {
//     filledHtml += `<li class="card js-card" id="${[index]}">`;
//     filledHtml += `<h3 class="card__title">${results[index].show.name}</h3>`;
//     if (results[index].show.image === null) {
//       filledHtml += `<img src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
//     } else {
//       filledHtml += `<img class="card__img" src="${results[index].show.image.medium}"/>`;
//     }
//     filledHtml += "</li>";
//     rsltContainer.innerHTML = filledHtml;
//   }
// }
