export default class Game {
  constructor(cards, level) {
    this.cards = cards;
    this.level = level;
    this.correctBuffer = [];
    this.incorrectBuffer = [];
    this.activeCards = [];
    this.gameEndHandler = null;

    this.cards.forEach(card => card.setOpenHandler(this.cardOpenHandler));
  }

  cardOpenHandler(card) {
    this.clearIncorrectBuffer();
    this.activeCards.push(card);
    if (!(this.activeCards.length === level)) {
      return;
    }

    const isEqual = this.isEqualCards(...this.activeCards);
    this.markCards(...this.activeCards, isEqual);
    this.activeCards = [];
    this.checkGameEnd();
  }

  isEqualCards(...cards) {
    if (cards) {
      return cards.every(card => card.getValue() === cards[0].getValue());
    }
    return true;
  }

  markCards(...cards, isEqual) {
    const mark = isEqual ? 'markCorrect' : 'markIncorrect';
    const buffer = isEqual ? this.correctBuffer : this.incorrectBuffer;
    cards.forEach(card => card[mark]());
    buffer.push(...cards); 
  }

  clearIncorrectBuffer() {
    if (this.incorrectBuffer) {
      this.incorrectBuffer.forEach(card => card.turnDown());
      this.incorrectBuffer = [];
    }
  }

  checkGameEnd() {
    const isEnd = this.cards.length === this.correctBuffer.length;
    if (isEnd && this.gameEndHandler) {
      this.gameEndHandler();
    }
  }

  setGameEndHandler(handler) {
    this.gameEndHandler = handler;
  }
}