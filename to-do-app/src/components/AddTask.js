// import React, { useState } from "react";
// import "./AddTask.css"; // Ensure you import the updated CSS

// const AddTask = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       dueDate,
//       completed: false,
//     };

//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     savedTasks.push(newTask);
//     localStorage.setItem("tasks", JSON.stringify(savedTasks));

//     setTitle("");
//     setDescription("");
//     setDueDate("");
//     alert("Task added successfully!");
//   };

//   return (
//     <div className="add-task-container">
//       <h2>Add a New Task</h2>
//       <form onSubmit={handleAddTask}>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Due Date</label>
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="add-task-button">
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;




import React, { useState } from "react";
import "./AddTask.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority, // Add priority to the task object
      completed: false,
    };

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
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
        <div className="form-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
