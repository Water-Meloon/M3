import Task from "../Classes/Task";
import React, { useState, useEffect } from "react";

const MyToDoList = () => {

  const [data, setData] = useState();

  useEffect(() => {
    fetch('../data/tasks.json')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};

export default MyToDoList;
