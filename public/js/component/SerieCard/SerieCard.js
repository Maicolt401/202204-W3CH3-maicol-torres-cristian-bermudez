import Component from "../Component.js";

class SerieCard extends Component {
  serie;
  constructor(parentElement, serie) {
    super(parentElement, "li", "serie");
    this.serie = serie;
    this.render();
  }

  render() {
    this.element.innerHTML = `
  <img class="serie__poster" src="${this.serie.poster}" alt="${this.serie.name} poster">
  <h4 class="serie__title">${this.serie.name}</h4>
    <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
    <ul class="score">
      <li class="score__star">
      <i class="icon--score fas fa-star" title="1/5"></i>
      </li>
          <li class="score__star">
              <i class="icon--score fas fa-star" title="2/5"></i>
          </li>
                  
      </li>
    </ul>
  <i class="fas fa-times-circle icon--delete"></i>


`;
  }
}

export default SerieCard;
