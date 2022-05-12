import { differenceInYears } from "date-fns";

export const ageCalculator = (string) => {
  string = string.split("T");
  const response = differenceInYears(new Date(), new Date(string[0]));
  return isNaN(response) ? "Invalid input" : response;
};

export const arrayFilter = (filter, items) => {
  const newFilter = filter.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  const newArray = items.filter((item) => {
    const checkName = item.name
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, "")
      .includes(newFilter);
    const checkAddress = item.address
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, "")
      .includes(newFilter);
    const checkPhone = item.phone_number
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, "")
      .includes(newFilter);
    const checkBirthday = item.birthday
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, "")
      .includes(newFilter);
    return checkName || checkAddress || checkPhone || checkBirthday;
  });
  return newArray;
};
