import useSWR from 'swr';
const api_host = import.meta.env.VITE_API_HOST;

type User = {
  id: number;
  first_name: string;
  last_name: string;
  dept_id: number;
  team_id: number;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User[] | null>);
}

export const useUsers = () => {
  const { data, error, isLoading } = useSWR(api_host + '/user', fetcher);
  // const { data, error, isLoading } = useSWR(api_host + '/file_info', fetcher, {
  //   refreshInterval: 5000,
  // });

  return {
    users: data,
    isLoading,
    isError: error,
  };
};
