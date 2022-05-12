import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/Layout";
import Toggle from "../components/Toggle";
import List from "../components/List";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WithStaticProps = () => {
  const [fetchNextjs, setFetchNextjs] = useState(true);
  const { data, error } = useSWR(
    fetchNextjs ? "/api/users" : "http://localhost:3001/users",
    fetcher
  );

  console.log(data);

  if (error)
    return (
      <div className="text-red-600 flex justify-center items-center h-screen">
        An error has occurred.
      </div>
    );
  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <Layout title="Yellow Pages - Users List">
      <Toggle
        title="Fetch External API"
        onChangeFun={() => setFetchNextjs((prevState) => !prevState)}
      />
      <List items={fetchNextjs ? data : data.data} />
    </Layout>
  );
};

export default WithStaticProps;
