export const createElemWithClass = (type, className) => {
  const elem = document.createElement(type);
  elem.classList.add(className);
  return elem;
};