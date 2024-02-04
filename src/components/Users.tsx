import useSWR from 'swr';

const api_host = import.meta.env.VITE_API_HOST;

function Users() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(api_host + '/file_info', fetcher, {
  //   refreshInterval: 5000,
  // });

  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(api_host + '/user', fetcher);

  const testconsole = () => {
    console.log(data);
    console.log(api_host);
  };

  return (
    <>
      <p className="text-2xl">Users Data</p>
      <button onClick={testconsole}>userのテストするで</button>
    </>
  );
}

export default Users;
