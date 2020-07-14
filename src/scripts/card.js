import { createCardElement } from "./utils/create-card-element";
import { faceImgSources } from "./constants/face-img-sources";

export default class Card {
  constructor(value) {
    this.isOpen = false;
    this.value = value;
    this.openHandler = null;
    this.domElements = createCardElement(faceImgSources[value]);
    this.domElements.card.addEventListener('click', this.open);
  }

  getValue = () => this.value;

  markCorrect() {
    this.domElements.face.classList.add('card__face--correct');
  }

  markIncorrect() {
    this.domElements.face.classList.add('card__face--incorrect');
  }

  open = () => {
    console.log('open!');
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.domElements.card.classList.add('card--open');
    if (this.openHandler) {
      this.openHandler(this);
    }	
  };

  close() {
    this.isOpen = false;
    this.domElements.card.classList.remove('card--open');
    this.domElements.face.classList.remove('card__face--incorrect');
  }

  setOpenHandler(handler) {
    this.openHandler = handler;
  }

  getDomElement() {
    return this.domElements.card;
  }
}