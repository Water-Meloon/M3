import React from "react";
import classes from "./ViewTaskDetail.module.css";
function ViewTaskDetail() {
  return (
    <div className={classes.wrapper}>
      <h1>Task Detail</h1>
      <h2>Task Name</h2>
      <p>Category: Urgent</p>
      <p>Due Date: January 31, 2023</p>
      <p>Status: Incomplete</p>
      <p>Location: N/A</p>
      <p>Description: This is a demo task.</p>
      <form action="myToDoList.html">
        <input className={classes.button} type="submit" value="Add to My To Do List" />
      </form>
    </div>
  );
}

export default ViewTaskDetail;
