const wrapCard = (cardElement) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('card-wrapper');
  wrapper.appendChild(cardElement);
  return wrapper; 
}

export default class GameRenderer {
  
  mount(game, parentElement) {
    const container = document.createElement('div');
    container.classList.add('content');

    const cards = game.getCards();
    cards.forEach(card => {
      container.appendChild(
        wrapCard(card.getDomElement())
      );
    });

    parentElement.appendChild(container);
  }
}