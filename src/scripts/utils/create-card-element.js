import { createElemWithClass } from './create-elem-with-class';

export const createCardElement = (faceImgSource) => {
  const card = createElemWithClass('div', 'card');
  const face = createElemWithClass('div', 'card__face');
  const shirt = createElemWithClass('div', 'card__shirt');

  const img = document.createElement('img');
  img.setAttribute('src', faceImgSource);

  face.appendChild(img);
  card.appendChild(face);
  card.appendChild(shirt);

  return { card, face };
};