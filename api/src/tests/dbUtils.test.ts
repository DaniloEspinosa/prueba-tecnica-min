import { readDatabase } from "../utils/dbUtils";


describe("fetching data", () => {
  test("It should return a json object", async () => {
    const data = readDatabase()
    expect(typeof data).toEqual("object")
  });

  test("It should be a function", async () => {
    expect(typeof readDatabase).toEqual("function")
  });
});
