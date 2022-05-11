import { ageCalculator } from "../utils/functions";

describe("Calculate Age with string input", () => {
  test("it should return the age based on the string input", () => {
    const stringDate = "1967-06-13T03:19:21 -02:00";
    const output = ageCalculator(stringDate);
    expect(output).toBe(54);
  });
  test("it should return error message if the date input is not valid", () => {
    const stringDate = "1967-06-13INSLT03:19:21 -02:00";
    const output = ageCalculator(stringDate);
    expect(output).toBe("Invalid input");
  });
});
