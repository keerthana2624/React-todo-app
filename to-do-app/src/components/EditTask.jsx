import React from "react";
import "./EditTask.css"; // Include any specific styles for the edit form

const EditTask = ({ editingTask, setEditingTask, handleSaveTask, handleCancelEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveTask(editingTask);
  };

  return (
    <div className="edit-task-container">
      <h3>Edit Task</h3>
      <form onSubmit={handleSubmit}>
        {/* Task Title */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editingTask.title || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* Task Description */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editingTask.description || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* Task Priority */}
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={editingTask.priority || "Medium"}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Task Date */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={editingTask.date || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* Save and Cancel Buttons */}
        <div className="form-actions">
          <button type="submit" className="save-button">
            Save
          </button>
          <button type="button" className="cancel-button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
