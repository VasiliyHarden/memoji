import App from './scripts/app';
import { gameLevels } from './scripts/constants/game-levels';

import './index.scss';

const gameRoot = document.getElementById('game-root');
const infoRoots = {
  level: document.getElementById('level-info'),
  moves: document.getElementById('moves-info'),
  copies: document.getElementById('copies-info')
};

const app = new App(gameRoot, infoRoots);

const newGameRequestHandler = (e) => {
  app.newGameRequest(gameLevels[e.currentTarget.dataset.level]);
};
const gameStartLinks = document.querySelectorAll('[data-game-runner]');
gameStartLinks.forEach(elem => elem.addEventListener('click', newGameRequestHandler));