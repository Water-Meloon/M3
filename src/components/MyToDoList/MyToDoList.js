import React from "react";
import classes from './MyToDoList.module.css';

function MyToDoList(props) {
  // const [tasks, setTasks] = useState([
  //   { id: 1, name: "Task 1", category: "urgent", dueDate: "2023-04-05", status: "pending", location: "Home", description: "Task Description" },
  //   { id: 2, name: "Task 2", category: "urgent", dueDate: "2023-04-06", status: "pending", location: "Office", description: "Task Description" },
  //   { id: 3, name: "Task 3", category: "Not Urgent", dueDate: "2023-04-07", status: "pending", location: "Gym", description: "Task Description" }
  // ]);

  const deleteTask = (id) => {
    // setTasks(props.data.filter((task) => task.id !== id));
    props.deleteHandler(id);
  };

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
                  <div className={classes.task} key={task.id}>
                    <h3>{task.name}</h3>
                    <span>{task.description}</span>
                    <span>Due: {task.dueDate}</span>
                    <span>Location: {task.location}</span>
                    <button className={classes.delete} onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                ))}
            </div>
            <h2>Non-Urgent:</h2>
            <div className={classes.taskCont}>
              {props.tasks
                .filter((task) => task.category === "Not Urgent")
                .map((task) => (
                  <div className={classes.task} key={task.id}>
                    <h3>{task.name}</h3>
                    <span>{task.description}</span>
                    <span>Due: {task.dueDate}</span>
                    <span>Location: {task.location}</span>
                    <button className={classes.delete} onClick={() => deleteTask(task.id)}>Delete</button>
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
