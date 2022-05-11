import { sampleUserData } from "../utils/sample-data";
import { arrayFilter } from "../utils/functions";

describe("Filter function", () => {
  test("it should filter by a search term", () => {
    const searchTerm = "Lou";
    const output = arrayFilter(searchTerm, sampleUserData);
    expect(output).toHaveLength(6);
  });
  test("it should return empty array if nothing is found", () => {
    const searchTerm = "Lou2323";
    const output = arrayFilter(searchTerm, sampleUserData);
    expect(output).toHaveLength(0);
  });
});
