

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Header />
        <header>
          {/* <h1>To-Do List App</h1> */}
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/task-list"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Task List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-task"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Add Task
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/" element={<Navigate to="/add-task" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
