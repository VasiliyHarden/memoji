import Game from './game';
import Card from './card';
import { cardValues } from './constants/card-values';

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const populateArray = (arr, copies) => {
  const res = [];
  for (let i = 0; i < copies; i++) {
    res.push(...arr);
  }
  return res;
};

export default class GameFactory {

  static create = (complexity) => {
    let values = shuffle(Object.values(cardValues));
    values = values.slice(0, complexity.values);
    values = populateArray(values, complexity.copies);
    shuffle(values);

    const cards = [];
    values.forEach(value => {
      cards.push(new Card(value));
    });

    return new Game(cards, complexity.copies, complexity.moves);
  }
}