import { gameOutcomes } from "./game-outcomes";

export const messages = {
  confirm: {
    title: 'Are you sure?',
    body: 'You will lose your current progress in this game'
  },
  [gameOutcomes.win]: {
    title: 'Awesome!',
    body: 'You totally nailed it! How can you be so smart?',
  },
  [gameOutcomes.lose]: {
    title: 'Dont worry',
    body: 'Cheer up, my dear. After every storm comes the sun. Happiness is waiting for you ahead.'
  }
};