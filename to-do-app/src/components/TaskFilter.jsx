import React from "react";
import './TaskFilter.css'
const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      {/* <label htmlFor="filter">Filter Tasks:</label> */}
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};


export default TaskFilter;