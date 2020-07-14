import { GameFactory } from './scripts/game-factory';
import GameRenderer from './scripts/game-renderer';
import { gameComplexity } from './scripts/constants/game-complexity';

import './index.scss';

console.log('Memoji setup');

const gameFactory = new GameFactory();
const gameRenderer = new GameRenderer();

const root = document.getElementById('root');
const game = gameFactory.create(gameComplexity.hard);
gameRenderer.mount(game, root);