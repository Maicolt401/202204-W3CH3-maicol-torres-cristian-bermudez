import SerieCard from "./SerieCard.js";

describe("Given a component SerieCard", () => {
  let parentDiv;
  beforeEach(() => {
    parentDiv = document.createElement("div");
  });

  describe("When it's instanced inside of a parent element", () => {
    test("Then it should create a 'li' element", () => {
      const newCard = new SerieCard(parentDiv, "");
      const expectedElementType = "LI";

      const newCardElementType = newCard.element.nodeName;

      expect(newCardElementType).toBe(expectedElementType);
    });
  });

  describe("When it's instanced with parentelement and the tag 'li'", () => {
    test("Then it should create a element <li> inside the given parent", () => {
      parentDiv.className = "testDiv";
      const newCard = new SerieCard(parentDiv, "");
      const expectedParentClass = "testDiv";

      const parentClass = newCard.element.parentNode.className;

      expect(parentClass).toBe(expectedParentClass);
    });
  });
});
