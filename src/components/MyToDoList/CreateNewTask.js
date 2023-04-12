// import React from 'react';
// import './style.css';
// import './CreateTask.css';

// function CreateNewTask() {
//   return (
//     <section className="createTask contact-letter">
//       <h1>Create New Task</h1>
//       <form action="myToDoList.html" className="container"> 
//         <label htmlFor="taskName">Task Name:</label>
//         <input type="text" id="taskName" name="taskName" />
//         <label htmlFor="category">Category:</label>
//         <select id="category" name="category">
//           <option value="urgent">Urgent</option>
//           <option value="Not Urgent">Not Urgent</option>
//         </select> <br />
//         <label htmlFor="dueDate">Due Date:</label>
//         <input type="date" id="dueDate" name="dueDate" />

//         <label htmlFor="status">Status:</label>
//         <select id="status" name="status">
//           <option value="pending">Pending</option> 
//           <option value="overdue">Overdue</option> 
//           <option value="incomplete">Incomplete</option> 
//           <option value="done">Done</option> 
//         </select> <br />
//         <label htmlFor="location">Location:</label>
//         <input type="text" id="location" name="location" />
//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" rows="5" cols="50" style={{verticalAlign: 'top'}} />
//         <input type="submit" value="Create" />
//       </form>
//     </section>
//   );
// }


// export default CreateNewTask;

import React, { useState } from 'react';
import './style.css';
import './CreateTask.css';

function CreateNewTask(props) {
  const [formData, setFormData] = useState({
    taskName: '',
    category: 'urgent',
    dueDate: '',
    status: 'pending',
    location: '',
    description: ''
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   props.onAddTask(formData);
  // }

  return (
    <section className="createTask contact-letter">
      <h1>Create New Task</h1>
      <form  className="container"> 
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" id="taskName" name="taskName" value={formData.taskName} onChange={handleFormChange} />
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleFormChange}>
          <option value="urgent">Urgent</option>
          <option value="Not Urgent">Not Urgent</option>
        </select> <br />
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleFormChange} />

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={formData.status} onChange={handleFormChange}>
          <option value="pending">Pending</option> 
          <option value="overdue">Overdue</option> 
          <option value="incomplete">Incomplete</option> 
          <option value="done">Done</option> 
        </select> <br />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={formData.location} onChange={handleFormChange} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="5" cols="50" style={{verticalAlign: 'top'}} value={formData.description} onChange={handleFormChange} />
        <input type="submit" value="Create" />
      </form>
    </section>
  );
}

export default CreateNewTask;

