import React from "react";

const Task = () => {
  return (
    <div className="row mx-2 align-items-center">
      <div>1</div>
      <div className="col">Description</div>
      <button className="btn btn-warning mx2">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Task;
