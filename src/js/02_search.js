// ----- Listens to click on Search button
btn.addEventListener("click", handleSearch);
// btn.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//   }
// });

// ----- Activates actions when Search button is clicked
function handleSearch() {
  filledHtml = "";
  getData();
  paintResults();
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
function paintResults() {
  for (item = 0; item < results.length; item++) {
    paint(rsltContainer, cardClass, item);
  }
  console.log(results, "<-- Array results");
}
