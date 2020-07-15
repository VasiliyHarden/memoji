export const clearChildren = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.lastChild);
  }
};