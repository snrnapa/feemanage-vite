import useSWR from 'swr';

type Dept = {
  dept_id: number;
  dept_name: string;
  leader_id: number;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<Dept | null>);
}

export const useDepts = () => {
  const { data, error, isLoading } = useSWR(
    'http://localhost:9001/dept?id=1',
    fetcher,
  );

  return {
    dept: data,
    isLoading,
    isError: error,
  };
};
