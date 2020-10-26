function paint(htmlContainer, className, ID) {
  let filledHtml = "";
  filledHtml += `<li class="${className} js-card" id="${[ID]}">`;
  filledHtml += `<h3 class="${className}__title">${results[ID].show.name}</h3>`;
  if (results[ID].show.image === null) {
    filledHtml += `<img class="${className}__img" src="//via.placeholder.com/210x296/f0ffff/00008b/?text=No+image+available"/>`;
  } else {
    filledHtml += `<img class="${className}__img" src="${results[ID].show.image.medium}"/>`;
  }
  filledHtml += "</li>";
  htmlContainer.innerHTML += filledHtml;
}
