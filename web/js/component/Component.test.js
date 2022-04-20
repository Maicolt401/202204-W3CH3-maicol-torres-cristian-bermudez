import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it receives tag Parragraph", () => {
    test("Then it should a create a Parragraph element", () => {
      const divCreate = document.createElement("div");
      const elementResult = new Component(divCreate, "p");
      const expectedNameTag = "P";

      const elementNameTag = elementResult.element.nodeName;

      expect(expectedNameTag).toBe(elementNameTag);
    });
  });
});
