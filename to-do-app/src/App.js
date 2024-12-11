import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Correct import
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>To-Do List App</h1>
          {/* Optional Navigation Links */}
        </header>
        <main>
          <Routes>
            {/* Route for the task list */}
            <Route path="/task-list" element={<TaskList />} />

            {/* Route for adding a new task */}
            <Route path="/add-task" element={<AddTask />} />

            {/* Redirect to task list */}
            <Route path="/" element={<Navigate to="/task-list" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
