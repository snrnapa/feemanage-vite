// function Depts() {
//   // const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   // const { data, error, isLoading } = useSWR(api_host + '/file_info', fetcher, {
//   //   refreshInterval: 5000,
//   // });

//   const fetcher = (url: string): Promise<any> =>
//     fetch(url).then((res) => res.json());

//   const { data, error, isLoading } = useSWR(api_host + '/user', fetcher);

//   const testconsole = () => {
//     console.log(data);
//     console.log(api_host);
//   };

//   return (
//     <>
//       <p className="text-2xl">Depts Data</p>
//       <button onClick={testconsole}>userのテストするで</button>
//       {isLoading ? (
//         <p>loading...</p>
//       ) : error ? (
//         <p>failed to load</p>
//       ) : (
//         <div className="p-4  space-y-3 rounded overflow-hidden shadow-lg">
//           {data.map((user) => {
//             return (
//               <div
//                 key={user.id}
//                 className="flex flex-col justify-center rounded border  shadow-lg bg-cyan-100 "
//               >
//                 <p className="text-xl">社員番号：{user.id}</p>
//                 <p className="text-xl">
//                   {user.last_name} {user.first_name}
//                 </p>
//                 <p className="text-xl">
//                   dept/team : {user.dept_id}/{user.team_id}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// }

// export default Depts;
