import { createCardElement } from "./utils/create-card-element";
import { faceImgSources } from "./constants/face-img-sources";

export default class Card {
  constructor(value) {

    this.value = value;
    this.domElements = createCardElement(faceImgSources(value));
  }

  getValue() {
    return this.value;
  }

  markCorrect() {
    this.domElements.card.classList.add('card--correct');
  }

  markIncorrect() {
    this.domElements.card.classList.add('card--incorrect');
  }

  turnDown() {

    this.domElements.card.classList.remove('card--incorrect');
  }

  getNativeElement() {
    return this.domElements.wrapper;
  }
}