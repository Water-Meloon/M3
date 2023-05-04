import React from "react";
import classes from './MyToDoList.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import { Link, useNavigate } from "react-router-dom";

function MyToDoList(props) {
  const deleteTask = async (id) => {

    console.log('Deleting task with id:', id);
    try {
      const userId = localStorage.getItem("userId");
      await axios.delete(`https://watermelon-ewlo.onrender.com/api/Tasks/${id}/${userId}`);
      props.deleteHandler(id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  const navigate = useNavigate();

  function handleClick() {
    navigate("/viewtaskdetail");
  }


  return (
    <>
      {props.tasks && (
        <section className={classes.wrapper}>
          <h1 className={classes.header}>My To Do List</h1>
          <div>
            <h2>Urgent:</h2>
            <div className={classes.taskCont}>
              {props.tasks
                .filter((task) => task.category === "urgent")
                .map((task) => (
                  <div className={classes.task} key={task._id}>
                    <h3>{task.name}</h3>
                    <span>{task.description}</span>
                    <span>Due: {task.dueDate}</span>
                    <span>Location: {task.location}</span>
                    <button className={classes.delete} onClick={() => deleteTask(task._id)}>X</button>
                    <button onClick={() => {props.onSelectTask(task._id);handleClick();}}>View Task Detail</button>
                  </div>
                ))}
            </div>
            <h2>Non-Urgent:</h2>
            <div className={classes.taskCont}>
              {props.tasks
                .filter((task) => task.category === "Not Urgent")
                .map((task) => (
                  <div className={classes.task} key={task._id}>
                    <h3>{task.name}</h3>
                    <span>{task.description}</span>
                    <span>Due: {task.dueDate}</span>
                    <span>Location: {task.location}</span>
                    <button className={classes.delete} onClick={() => deleteTask(task._id)}>X</button>
                    <button onClick={() => {props.onSelectTask(task._id);handleClick();}}>View Task Detail</button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MyToDoList;
