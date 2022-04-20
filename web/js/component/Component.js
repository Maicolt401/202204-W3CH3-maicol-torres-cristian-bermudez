class Component {
  element;
  constructor(parentElement, tag, nameCalss) {
    this.element = document.createElement(tag);
    this.element.className = nameCalss;
    parentElement.append(this.element);
  }
}

export default Component;
