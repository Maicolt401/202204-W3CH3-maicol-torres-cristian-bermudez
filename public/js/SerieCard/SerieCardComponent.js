import Component from "../component/Component";

class SerieCard extends Component {
  constructor(parentElement) {
    super(parentElement, "li", "serie");
    this.render();
  }

  render() {
    return this.element;
  }
}

export default SerieCard;
