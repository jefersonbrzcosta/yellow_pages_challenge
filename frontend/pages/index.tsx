import useSWR from "swr";
import Layout from "../components/Layout";
import List from "../components/List";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WithStaticProps = () => {
  const { data, error } = useSWR("/api/users", fetcher);

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
      <List items={data} />
    </Layout>
  );
};

export default WithStaticProps;
