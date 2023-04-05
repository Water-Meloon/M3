import React, { useState } from 'react';
import './style.css';


function MyToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", category: "urgent", dueDate: "2023-04-05", status: "pending", location: "Home", description: "Task Description" },
    { id: 2, name: "Task 2", category: "urgent", dueDate: "2023-04-06", status: "pending", location: "Office", description: "Task Description" },
    { id: 3, name: "Task 3", category: "Not Urgent", dueDate: "2023-04-07", status: "pending", location: "Gym", description: "Task Description" }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="createTask">
      <h1 className="center-text">My To Do List</h1>
      <div className="listForm">
        <h2 className="p-todolist">Urgent:</h2>
        <div className="task-cards-container">
          {tasks.filter((task) => task.category === 'urgent').map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Location: {task.location}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
        <h2 className="p-todolist">Non-Urgent:</h2>
        <div className="task-cards-container">
          {tasks.filter((task) => task.category === 'Not Urgent').map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Location: {task.location}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      {/* <CreateNewTask onAddTask={addTask} /> */}
    </section>
  );
}

export default MyToDoList;
