import { useUsers } from '../hooks/useUsers';

function Users() {
  const { users, isLoading, isError } = useUsers();

  return (
    <>
      <p className="text-2xl">Users Data</p>
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>failed to load</p>
      ) : (
        <div className="p-4  space-y-3 rounded overflow-hidden shadow-lg">
          {users?.map((user) => {
            return (
              <div
                key={user.id}
                className="flex flex-col justify-center rounded border  shadow-lg bg-cyan-100 "
              >
                <p className="text-xl">社員番号：{user.id}</p>
                <p className="text-xl">
                  {user.last_name} {user.first_name}
                </p>
                <p className="text-xl">
                  dept/team : {user.dept_id}/{user.team_id}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Users;
