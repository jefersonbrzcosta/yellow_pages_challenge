import * as React from "react";
import ListItem from "./ListItem";
import { SampleData } from "../interfaces";
import { arrayFilter } from "../utils/functions";

type Props = {
  items: SampleData[];
};

const List = ({ items }: Props) => {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [searchFilter, setSearchFilter] = React.useState<string>("");
  const [users, setUsers] = React.useState<any>(items);

  React.useEffect(() => {
    const newArray: SampleData[] = arrayFilter(searchFilter, items);

    setErrorMessage(
      newArray.length === 0 && searchFilter
        ? "No results, please review your search or try a different one"
        : ""
    );

    setUsers(() => [...newArray]);
    !searchFilter && setUsers(items);
  }, [searchFilter]);

  return (
    <div className="flex items-center flex-col">
      <input
        className=" w-9/12 h-10 px-3 m-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <p className="text-red-600" data-testid="error-message">
        {errorMessage}
      </p>
      <ul className="w-6/12">
        {users.map((item) => (
          <li key={item.id} data-testid="list-item">
            <ListItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
