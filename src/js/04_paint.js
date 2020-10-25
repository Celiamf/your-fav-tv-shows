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
