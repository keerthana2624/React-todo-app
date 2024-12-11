// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Correct import
// import TaskList from "./components/TaskList";
// import AddTask from "./components/AddTask";
// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <header>
//           <h1>To-Do List App</h1>
//           {/* Optional Navigation Links */}
//         </header>
//         <main>
//           <Routes>
//             {/* Route for adding a new task */}
//             <Route path="/add-task" element={<AddTask />} />
//             <Route path="/task-list" element={<TaskList />} />
//             <Route path="/" element={<Navigate to="/task-list" />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css"; // For the navigation styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>To-Do List App</h1>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/task-list" 
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                >
                  Task List
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/add-task" 
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
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
            <Route path="/" element={<Navigate to="/task-list" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
