import React, { useState, useEffect } from "react";
import classes from "./CreateNewTask.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function CreateNewTask(props) {
  const [formData, setFormData] = useState({
    id: Math.ceil(Math.random()*10),
    taskName: "",
    category: "urgent",
    dueDate: "",
    status: "pending",
    location: "",
    description: "",
    userId: props.userId,
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: props.userId,
    }));
  }, [props.userId]);
  console.log("User ID set in formData:", props.userId);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/MyToDoList");
    }
  }, [shouldNavigate, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post("http://localhost:3001/api/Tasks", formData);
      props.addTask(response.data);
      console.log(response.data);
      setFormData({
        id:Math.ceil(Math.random()*10),
        taskName: "",
        category: "urgent",
        dueDate: "",
        status: "pending",
        location: "",
        description: "",
        userId: props.userId,
      });
      setShouldNavigate(true);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  if (!props.userId || props.isLoggedIn) {
    return <div>Please log in to create a task.</div>;
  }
  return (
    <section className={classes.wrapper}>
      <h1>Create New Task</h1>
      <form className={classes.container} onSubmit={submitHandler}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={formData.taskName}
          onChange={handleFormChange}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          <option value="urgent">Urgent</option>
          <option value="Not Urgent">Not Urgent</option>
        </select>{" "}
        <br />
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleFormChange}
        />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleFormChange}
        >
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
          <option value="incomplete">Incomplete</option>
          <option value="done">Done</option>
        </select>{" "}
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleFormChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="50"
          style={{ verticalAlign: "top" }}
          value={formData.description}
          onChange={handleFormChange}
        />
        <button type="submit" className={classes.button}>
          Create
        </button>
      </form>
    </section>
  );
}

export default CreateNewTask;
