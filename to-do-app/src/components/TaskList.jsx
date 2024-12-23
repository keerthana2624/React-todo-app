import React, { useState, useEffect } from "react";
import "./TaskList.css"; // Ensure this path points to the actual file
import EditTask from "./EditTask";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTask, setEditingTask] = useState({ title: "", description: "", priority: "Low" });

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

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTaskId(taskId);
    setEditingTask({ ...taskToEdit });
  };

  const handleSaveTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditingTaskId(null);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

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

      {/* Status Filter */}
      <div className="status-filter">
        <label htmlFor="status">Status: </label>
        <select
          id="status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div className="priority-filter">
        <label htmlFor="priority">Priority: </label>
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

      {/* Modal Overlay and Editing Task Form */}
      {editingTaskId && (
        <div className="edit-task-overlay">
          <div className="edit-task-container">
            <EditTask
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              handleSaveTask={handleSaveTask}
              handleCancelEdit={handleCancelEdit}
            />
          </div>
        </div>
      )}

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${
              task.completed
                ? "completed"
                : task.priority
                ? task.priority.toLowerCase()
                : "default"
            }`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className="due-date">Due: {task.dueDate}</p>
            <p className="priority">Priority: {task.priority || "Low"}</p>
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
                className="edit-button"
                onClick={() => handleEditTask(task.id)}
              >
                Edit
              </button>
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
