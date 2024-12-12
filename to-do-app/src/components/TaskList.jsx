// import React, { useState, useEffect } from "react";
// import TaskFilter from "./TaskFilter";
// // import "../App.css";
// import './TaskList.css'; // Make sure this path points to the actual file


// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("All"); // State for filter

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(savedTasks);
//   }, []);

//   const handleDeleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const handleCompleteTask = (taskId) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   // Function to filter tasks based on the selected filter
//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "All") return true;
//     if (filter === "Completed") return task.completed;
//     if (filter === "Pending") return !task.completed;
//     return true;
//   });

//   return (
//     <div className="task-list-container">
//       <h2>Task List</h2>

//       {/* Filter Component */}
//       <TaskFilter filter={filter} setFilter={setFilter} />

//       {/* Task List */}
//       {filteredTasks.length > 0 ? (
//         filteredTasks.map((task) => (
//           <div
//             key={task.id}
//             className={`task-item ${task.completed ? "completed" : ""}`}
//           >
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p className="due-date">Due: {task.dueDate}</p>
//             <div className="task-actions">
//               {!task.completed && (
//                 <button
//                   className="complete-button"
//                   onClick={() => handleCompleteTask(task.id)}
//                 >
//                   Mark as Complete
//                 </button>
//               )}
//               <button
//                 className="delete-button"
//                 onClick={() => handleDeleteTask(task.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No tasks available.</p>
//       )}
//     </div>
//   );
// };

// export default TaskList;



import React, { useState, useEffect } from "react";
import TaskFilter from "./TaskFilter";
import "./TaskList.css"; // Ensure this path points to the actual file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); // State for filter
  const [priorityFilter, setPriorityFilter] = useState("All"); // State for priority filter

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Filter tasks based on selected criteria (status and priority)
  const filteredTasks = tasks.filter((task) => {
    if (filter !== "All" && (filter === "Completed") !== task.completed) {
      return false;
    }
    if (priorityFilter !== "All" && task.priority !== priorityFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="task-list-container">
      <h2>Task List</h2>

      {/* Filter Components */}
      <TaskFilter filter={filter} setFilter={setFilter} />

      <div className="priority-filter">
        <label htmlFor="priority">Filter by Priority: </label>
        <select
          id="priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${
              task.completed ? "completed" : task.priority.toLowerCase()
            }`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className="due-date">Due: {task.dueDate}</p>
            <p className="priority">Priority: {task.priority}</p>
            <div className="task-actions">
              {!task.completed && (
                <button
                  className="complete-button"
                  onClick={() => handleCompleteTask(task.id)}
                >
                  Mark as Complete
                </button>
              )}
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
  