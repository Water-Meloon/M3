import Task from "../Classes/Task";
import React, { useState, useEffect } from "react";

const tasks = [
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
    dueDate: "04/16/2023",
    taskStatus: "incomplete",
  },
];

const MyToDoList = () => {
  console.log(typeof tasks);
  const [data, setData] = useState(tasks);

  // FIX
  //   useEffect(() => {
  //     fetch('../data/tasks.json')
  //       .then((response) => response.json())
  //       .then((data) => setData(data.message))
  //       .catch((error) => console.log(error));
  //   }, []);
  console.log(typeof data);
  //

  return (
    <div>
      {data.map((element) => (
        <div>{element.name}</div>
      ))}
    </div>
  );
};

export default MyToDoList;
