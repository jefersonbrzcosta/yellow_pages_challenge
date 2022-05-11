import { differenceInYears } from "date-fns";

export const ageCalculator = (string) => {
  string = string.split("T");
  const response = differenceInYears(new Date(), new Date(string[0]));
  return isNaN(response) ? "Invalid input" : response;
};

export const arrayFilter = (filter, items) => {
  const newArray = items.filter((item) => {
    const checkName = item.name.toLowerCase().includes(filter.toLowerCase());
    const checkAddress = item.address
      .toLowerCase()
      .includes(filter.toLowerCase());
    const checkPhone = item.phone_number
      .toLowerCase()
      .includes(filter.toLowerCase());
    const checkBirthday = item.birthday
      .toLowerCase()
      .includes(filter.toLowerCase());
    return checkName || checkAddress || checkPhone || checkBirthday;
  });
  return newArray;
};
