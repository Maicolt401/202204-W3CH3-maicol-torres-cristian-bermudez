import Button from "../Button/Button.js";
import Component from "../Component.js";
import SerieCard from "../SerieCard/SerieCard.js";

class SerieComponent extends Component {
  series;

  constructor(parentElement, nameClass, series) {
    super(parentElement, "section", nameClass);
    this.series = series;
    this.render();
    this.deleteSerie();
  }

  deleteSerie(serieID) {
    this.series = this.series.filter((serie) => serie.id !== serieID);
    this.render();
  }

  render() {
    this.element.innerHTML = `
 
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
              
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
              
            </ul>
          </section>
        </section>
`;

    const unwatchedSeries = this.series.filter((serie) => !serie.watched);
    const unwatchedSeriesContainer = document.querySelector(
      ".series-pending > .series-list"
    );
    unwatchedSeries.forEach((serie) => {
      new SerieCard(unwatchedSeriesContainer, serie);
      const unwatchbuttonContainer = document.querySelector(
        ".series-list >li:last-child"
      );
      new Button(unwatchbuttonContainer, () => this.deleteSerie(serie.id));
    });

    const watchedSeries = this.series.filter((serie) => serie.watched);
    const watchedSeriesContainer = document.querySelector(
      ".series-list.series-list--watched"
    );

    watchedSeries.forEach((serie) => {
      new SerieCard(watchedSeriesContainer, serie);
      const buttonContainer = document.querySelector(
        ".series-list.series-list--watched >li:last-child"
      );
      new Button(buttonContainer, () => this.deleteSerie(serie.id));
    });
  }
}

export default SerieComponent;
