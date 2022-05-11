import React from "react";

import Avatar from "./Avatar";

import { ageCalculator } from "../utils/functions";

import { SampleData } from "../interfaces";

type Props = {
  data: SampleData;
};

const ListItem = ({ data }: Props) => (
  <div className="m-5 p-5 bg-yellow-300 rounded-lg flex">
    <Avatar avatarSize={50} image={`/${data.picture}`} />
    <div className="text-sm">
      <h2 className="font-semibold">{data.name}</h2>
      <p>Age: {data.birthday}</p>
      <p>Phone: {data.phone_number}</p>
      <p>Address: {data.address}</p>
    </div>
  </div>
);

export default ListItem;
