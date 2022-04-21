import Component from "./Component.js";

describe("Given a Component component", () => {
  let divCreate;
  beforeEach(() => {
    divCreate = document.createElement("div");
  });

  describe("When it receives tag Parragraph", () => {
    test("Then it should a create a Parragraph element", () => {
      const elementResult = new Component(divCreate, "p");
      const expectedNameTag = "P";

      const elementNameTag = elementResult.element.nodeName;

      expect(expectedNameTag).toBe(elementNameTag);
    });
  });
});
