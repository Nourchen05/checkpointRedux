import React from "react";
import Task from "../Task/Task";

const ListTask = () => {
  return (
    <div>
      <h2 className="my-3">List of Tasks</h2>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default ListTask;
