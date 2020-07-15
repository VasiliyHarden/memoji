import { createCardElement } from "./utils/create-card-element";
import { faceImgSources } from "./constants/face-img-sources";

export default class Card {
  constructor(value) {
    this.isOpen = false;
    this.value = value;
    this.openCardListener = null;
    this.domElements = createCardElement(faceImgSources[value]);
    this.domElements.card.addEventListener('click', this.open);
  }

  getDomElement = () => this.domElements.card;

  getValue = () => this.value;

  setOpenCardListener = (handler) => {
    this.openCardListener = handler;
  };

  open = () => {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.domElements.card.classList.add('card--open');
    if (this.openCardListener) {
      this.openCardListener(this);
    }	
  };

  close = () => {
    this.isOpen = false;
    this.domElements.card.classList.remove('card--open');
    this.domElements.face.classList.remove('card__face--incorrect');
  };

  markCorrect = () => {
    this.domElements.face.classList.add('card__face--correct');
  };

  markIncorrect = () => {
    this.domElements.face.classList.add('card__face--incorrect');
  };
}