import { createElemWithClass } from './utils/create-elem-with-class';
import { clearChildren } from './utils/clear-children';

export default class Modal {
  constructor() {
    this.modal = createElemWithClass('div', 'modal');
    this.wrapper = createElemWithClass('div', 'modal-wrapper');
    const overlay = createElemWithClass('div', 'modal-overlay');
    const container = createElemWithClass('div', 'modal-container');

    container.appendChild(overlay);
    container.appendChild(this.modal);
    this.wrapper.appendChild(container);

    overlay.addEventListener('click', this.hide);

    this.title = createElemWithClass('h2', 'modal__header');
    this.body = createElemWithClass('p', 'modal__body');
    this.buttons = createElemWithClass('div', 'modal__buttons');

    this.modal.appendChild(this.title);
    this.modal.appendChild(this.body);
    this.modal.appendChild(this.buttons);

    this.hide();
    document.body.appendChild(this.wrapper);
  }

  show = ({ title = '', body = '', buttons = []}) => {
    this._setText(this.title, title);
    this._setText(this.body, body);
    this._setButtons(buttons);
    this.wrapper.classList.remove('hidden');
  }

  hide = () => {
    this.wrapper.classList.add('hidden');
  }

  _setText = (element, content) => {
    if (content) {
      element.classList.remove('hidden');
      element.innerText = content;
    } else {
      element.classList.add('hidden');
    }
  };

  _setButtons = (buttons) => {
    clearChildren(this.buttons);

    if (buttons) {
      buttons.forEach(btn => {
        const elem = createElemWithClass('button', 'modal__btn');
        elem.addEventListener('click', btn.handler);
        elem.innerText = btn.label;
        this.buttons.appendChild(elem);
      });

      this.buttons.classList.remove('hidden');
    } else {
      this.buttons.classList.add('hidden');
    }
  }
}