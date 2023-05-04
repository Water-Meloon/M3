import React from "react";
import classes from "./ViewTaskDetail.module.css";

function ViewTaskDetail(props) {
  const { task, isLoggedIn } = props;

  if (!isLoggedIn) {
    return (
      <div className={classes.wrapper}>
        Please log in to view task details.
      </div>
    );
  }

  if (!task) {
    return <div className={classes.wrapper}>Loading task details...</div>;
  }

  return (
    <div className={classes.wrapper}>
      <h1>Task Detail</h1>
      <h2>{task.name}</h2>
      <p>Category: {task.category}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <p>Location: {task.location}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}

export default ViewTaskDetail;
