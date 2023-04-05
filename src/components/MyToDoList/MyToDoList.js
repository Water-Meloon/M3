import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

const MyToDoList = () => {
  //   const [data, setData] = useState(initialTasks);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./data/tasks.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  return (
    <div>
      {data && <TaskList data={data} />}
    </div>
  );
};

export default MyToDoList;
