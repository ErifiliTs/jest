let groceries = [];

describe("groceries array", () => {
  beforeEach(() => {
    console.log("before each");
    let groceries = ["milk", "potatoes"];
  });

  afterEach(() => {
    console.log("after each");
    let groceries = ["milk", "potatoes"];
  });

  beforeAll(() => {
    console.log("before all");
    let groceries = ["mink", "potatoes"];
  });

  // always executes last
  afterAll(() => {
    console.log("after all");
    let groceries = ["milk", "potatoes"];
  });

  test("should add groceries to the end to the array", () => {
    groceries.push("bread");
    expect(groceries[groceries.length - 1]).toBe("bread");
  });

  test("should add animal to the beginning of the array", () => {
    groceries.unshift("apples");
    expect(groceries[0]).toBe("apples");
  });

  test("should have initial length of 2", () => {
    expect(groceries.length).toBe(2);
    console.log(groceries);
  });
});

describe("testing something else", () => {
  test("should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
