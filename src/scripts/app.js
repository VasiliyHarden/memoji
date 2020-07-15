import GameFactory from "./game-factory";
import GameRenderer from "./game-renderer";
import Modal from "./modal";
import { messages } from "./constants/messages";
import { gameComplexity } from "./constants/game-complexity";
import { gameLevels } from "./constants/game-levels";

export default class App {
  constructor(gameRoot, infoRoots) {
    this.game = null;
    this.gameRoot = gameRoot;
    this.infoRoots = infoRoots;

    this.modal = new Modal();
    this.newGame(gameLevels.easy);
  }
  
  newGame = (level) => {
    const complexity = gameComplexity[level];
    this.game = GameFactory.create(complexity);
    this.game.setEndGameListener(this.endGameHandler);
    this.game.setOpenCardListener(this.updateInfo);

    this.setInfo(level, complexity.moves, complexity.copies);
    GameRenderer.mount(this.game, level, this.gameRoot);
  };

  newGameRequest = (level) => {
    this.modal.show({ ...messages.confirm, buttons: [{
      label: 'Yes',
      handler: () => { 
        this.newGame(level);
        this.modal.hide(); 
      }
    }, {
      label: 'No',
      handler: this.modal.hide
    }]});
  };

  endGameHandler = (outcome) => {
    this.modal.show({ ...messages[outcome], buttons: [{
      label: 'Go ahead',
      handler: this.modal.hide
    }]});
  };

  setInfo = (level, moves, copies) => {
    this.infoRoots.level.innerText = level;
    this.infoRoots.moves.innerText = moves;
    this.infoRoots.copies.innerText = copies;
  };

  updateInfo = (moves) => {
    this.infoRoots.moves.innerText = moves;
  };
}