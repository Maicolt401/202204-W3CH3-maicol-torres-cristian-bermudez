import Button from "./Button";

describe("Given, a button component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.className = "testDiv";
  });

  describe("When, instanteishon given a parent", () => {
    test("Then, it should render a button inside of it's parent", () => {
      const button = new Button(container);
      const expectedContainerClass = "testDiv";

      const parentClass = button.element.parentNode.className;

      expect(parentClass).toBe(expectedContainerClass);
    });
  });

  describe("When, instanteishon given a class 'icon--delete' an action and the users clicks on it", () => {
    test("Then, it should call the received action", () => {
      const buttonAction = jest.fn();
      new Button(container, buttonAction);

      const buttonClick = container.querySelector(".icon--delete");
      buttonClick.click();

      expect(buttonAction).toHaveBeenCalledTimes(1);
    });
  });
});
