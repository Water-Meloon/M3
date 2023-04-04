import React, { useState } from "react";
import classes from "./MyToDoList.module.css";
import TaskList from "./TaskList";

const initialTasks = [
  {
    key: "t1",
    name: "Groceries",
    topic: "Shopping",
    dueDate: "04/16/2023",
    taskStatus: "incomplete",
  },
  {
    key: "t2",
    name: "Groceries",
    topic: "Shopping",
    dueDate: "08/16/2023",
    taskStatus: "incomplete",
  },
];

const MyToDoList = () => {
  const [data, setData] = useState(initialTasks);

  // FIX
  //   useEffect(() => {
  //     fetch('../data/tasks.json')
  //       .then((response) => response.json())
  //       .then((data) => setData(data.message))
  //       .catch((error) => console.log(error));
  //   }, []);
//   console.log(typeof data);
  //

  return (
    <div>
        <TaskList data={data}/>
    </div>
  );
};

export default MyToDoList;
