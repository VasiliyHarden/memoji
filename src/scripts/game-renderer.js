import { clearChildren } from "./utils/clear-children";

const wrapCard = (cardElement) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('card-wrapper');
  wrapper.appendChild(cardElement);
  return wrapper; 
}

export default class GameRenderer {
  
  static mount = (game, level, parentElement) => {
    clearChildren(parentElement);

    const container = document.createElement('div');
    container.classList.add('game');
    container.classList.add(`game--${level}`)

    const cards = game.getCards();
    cards.forEach(card => {
      container.appendChild(
        wrapCard(card.getDomElement())
      );
    });

    parentElement.appendChild(container);
  }
}