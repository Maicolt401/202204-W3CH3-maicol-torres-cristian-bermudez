import SerieCard from "./SerieCardComponent";

describe("Given a component SerieCard", () => {
  describe("When it's instanced inside of a parent element", () => {
    test("Then it should create a 'li' element inside the parent element", () => {
      const parentElement = document.createElement("div");
      const newCard = new SerieCard(parentElement);

      const expectedElementType = "LI";

      const newCardElementType = newCard.element.nodeName;

      expect(newCardElementType).toBe(expectedElementType);
    });
  });
});
