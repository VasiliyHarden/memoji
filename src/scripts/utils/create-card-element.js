const createElemWithClass = (type, className) => {
  const elem = document.createElement(type);
  elem.classList.add(className);
  return elem;
};

export const createCardElement = (faceImgSource) => {
  const wrapper = createElemWithClass('div', 'card')
  const card = createElemWithClass('div', 'card__inner');
  const face = createElemWithClass('div', 'card__face');
  const shirt = createElemWithClass('div', 'card__shirt');

  const img = document.createElement('img');
  img.setAttribute('src', faceImgSouce);

  face.appendChild(img);
  card.appendChild(face);
  card.appendChild(shirt);
  wrapper.appendChild(card);
  
  return { wrapper, card };
};