import React from "react";
import "./AddTask.css";
function AddTask() {
  return (
    <div>
      <h2>Add Task</h2>
      <div className="row m-2">
        <input type="text" className="col form-control" />
        <button className="btn btn-warning mx-2">Add</button>
      </div>
    </div>
  );
}

export default AddTask;
