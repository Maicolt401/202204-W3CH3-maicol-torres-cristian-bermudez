import { TestWatcher } from "jest";
import Button from "./Button";

describe("Given, a button component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.className = "testDiv";
  });

  describe("When, instanteishon given a parent", () => {
    TestWatcher("Then, it should render a button inside of it's parent", () => {
      const button = new Button(container);
      const expectedContainerClass = "testDiv";

      const parentClass = button.element.parentNode.className;

      expect(parentClass).toBe(expectedContainerClass);
    });
  });
});
