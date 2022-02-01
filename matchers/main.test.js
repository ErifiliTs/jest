const sum = require("./main");

describe("example tests", () => {
  test("it should adds two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// expect should be used once in each function
describe("truthy or falsy", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });

  test("undefined", () => {
    const n = undefined;
    expect(n).toBeUndefined();
  });
});

describe("numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(10);
    expect(value).toBeLessThanOrEqual(4);
  });

  test("adding floats", () => {
    const value = 0.1 + 0.1;
    expect(value).toBeCloseTo(0.2);
  });
});

describe("strings", () => {
  test("this is a string", () => {
    expect("this is a string").toMatch(/this is a string/);
  });
});

describe("arrays", () => {
  test("Shopping List", () => {
    const shoppingList = ["apples", "potatoes", "milk"];
    expect(shoppingList).toContain("potatoes");
  });
});

function compiledCode() {
  throw new Error("Error Found");
}

describe("exceptions", () => {
  test("compiling goes as expected", () => {
    expect(() => compiledCode()).toThrow("Error Found");
  });
});
