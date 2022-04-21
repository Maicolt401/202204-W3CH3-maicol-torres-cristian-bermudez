import Component from "../Component.js";

class Parragraph extends Component {
  text;
  constructor(parentElement, nameClass, text) {
    super(parentElement, "p", nameClass);
    this.element.textContent = text;
  }
}
export default Parragraph;
