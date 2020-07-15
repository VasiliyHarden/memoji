import { gameOutcomes } from "./constants/game-outcomes";

export default class Game {
  constructor(cards, level, movesToDo) {
    this.cards = cards;
    this.level = level;
    this.movesToDo = movesToDo;
    this.correctBuffer = [];
    this.incorrectBuffer = [];
    this.activeCards = [];
    this.endGameListener = null;
    this.openCardListener = null;

    this.cards.forEach(card => card.setOpenCardListener(this.cardOpenHandler));
  }

  cardOpenHandler = (card) => {
    if (this.movesToDo === 0) { 
      return card.close();
    }
    this.updateMoves();
    this.clearIncorrectBuffer();
    this.activeCards.push(card);
    if (this.activeCards.length === this.level) {
      const isEqual = this.isEqualCards(...this.activeCards);
      this.markCards( isEqual, ...this.activeCards);
      this.activeCards = [];
    }
    this.checkGameEnd();
  };

  isEqualCards = (...cards) => {
    if (cards) {
      return cards.every(card => card.getValue() === cards[0].getValue());
    }
    return true;
  };

  markCards = (isEqual, ...cards) => {
    const mark = isEqual ? 'markCorrect' : 'markIncorrect';
    const buffer = isEqual ? this.correctBuffer : this.incorrectBuffer;
    cards.forEach(card => card[mark]());
    buffer.push(...cards); 
  };

  clearIncorrectBuffer = () => {
    if (this.incorrectBuffer) {
      this.incorrectBuffer.forEach(card => card.close());
      this.incorrectBuffer = [];
    }
  };

  checkGameEnd = () => {
    const successEnd = this.cards.length === this.correctBuffer.length;
    const failureEnd = this.movesToDo === 0;
    if (successEnd && this.endGameListener) {
      this.endGameListener(gameOutcomes.win);
    }
    if (failureEnd && this.endGameListener) {
      this.endGameListener(gameOutcomes.lose);
    }
  };

  getCards = () =>  this.cards;

  updateMoves = () => {
    this.movesToDo--;
    if (this.openCardListener) {
      this.openCardListener(this.movesToDo);
    }
  };

  setEndGameListener = (handler) => {
    this.endGameListener = handler;
  };

  setOpenCardListener = (handler) => {
    this.openCardListener = handler;
  };
}