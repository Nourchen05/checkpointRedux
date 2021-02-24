import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const taskstodo = useSelector((state) => state.taskstodo);
  return (
    <div>
      <h2 className="my-3">List of Tasks</h2>
      {taskstodo.map((tasktodo) => (
        <Task key={tasktodo.id} tasktodo={tasktodo} />
      ))}
    </div>
  );
};

export default ListTask;
