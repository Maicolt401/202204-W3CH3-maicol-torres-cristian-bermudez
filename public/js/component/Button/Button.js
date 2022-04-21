import Component from "../Component.js";

class Button extends Component {
  action;

  constructor(parentElement, action) {
    super(parentElement, "i", "fas fa-times-circle icon--delete");
    this.action = action;
    this.myListener();
  }

  myListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
