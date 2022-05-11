import { differenceInYears } from "date-fns";

export const ageCalculator = (string) => {
  string = string.split("T");
  const response = differenceInYears(new Date(), new Date(string[0]));
  return isNaN(response) ? "Invalid input" : response;
};
