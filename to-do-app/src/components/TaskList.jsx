import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Handle task completion toggle
  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Handle task deletion
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {task.dueDate && <p>Due: {task.dueDate}</p>}
            <button onClick={() => handleComplete(task.id)}>
              Mark as {task.completed ? "Pending" : "Complete"}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};


