// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import './AddTask.css';
// const AddTask = () => {
//   const [title, setTitle] = useState(""); // State for task title
//   const [description, setDescription] = useState(""); // State for task description
//   const [dueDate, setDueDate] = useState(""); // State for task due date
//   const navigate = useNavigate(); // Hook to navigate after adding task

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Generate a unique ID for the task
//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       dueDate,
//       completed: false, // Initially set task as not completed
//     };

//     // Get existing tasks from localStorage
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     // Add the new task to the list
//     savedTasks.push(newTask);

//     // Save the updated task list to localStorage
//     localStorage.setItem("tasks", JSON.stringify(savedTasks));

//     // Reset input fields
//     setTitle("");
//     setDescription("");
//     setDueDate("");

//     // Redirect to task list page after adding the task
//     navigate("/task-list");
//   };

//   return (
//     <div className="add-task-container">
//       <h2>Add New Task</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <button type="submit">Add Task</button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;



import React, { useState } from "react";
import "./AddTask.css"; // Ensure you import the updated CSS

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      completed: false,
    };

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    setTitle("");
    setDescription("");
    setDueDate("");
    alert("Task added successfully!");
  };

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>
      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
