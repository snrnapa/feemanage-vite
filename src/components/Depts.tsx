import { useEffect, useState } from 'react';

import axios from 'axios';

const API_BASEURL = 'http://localhost:9001/dept/all';

function Depts() {
  const [depts, setDepts] = useState();

  useEffect(() => {
    axios.get(API_BASEURL, { params: {} }).then((res) => {
      setDepts(res.data);
    });
  }, []);

  return (
    <>
      <p>Dept List</p>
      {depts?.map((dept) => {
        return (
          <div
            key={dept.dept_id}
            className="flex flex-col justify-center rounded border  shadow-lg bg-cyan-100 "
          >
            <p className="text-xl">{dept.dept_name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Depts;
