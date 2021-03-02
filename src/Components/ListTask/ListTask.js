import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { useState } from "react";

const ListTask = () => {
  const [status, setstatus] = useState("all");
  const taskstodo = useSelector((state) => state.taskstodo);
  return (
    <div>
      <h2 className="my-3">List of Tasks</h2>

      <div className="text-center">
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => setstatus("all")}
        >
          All
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => setstatus("undone")}
        >
          Done
        </button>
        <button
          className="btn btn-outline-warning m-2"
          onClick={() => setstatus("done")}
        >
          Undone
        </button>
      </div>
      <br />
      {status == "done"
        ? taskstodo
            .filter((tasktodo) => tasktodo.isdone == true)
            .map((tasktodo) => <Task key={tasktodo.id} tasktodo={tasktodo} />)
        : status == "undone"
        ? taskstodo
            .filter((tasktodo) => tasktodo.isdone == false)
            .map((tasktodo) => <Task key={tasktodo.id} tasktodo={tasktodo} />)
        : taskstodo.map((tasktodo) => (
            <Task key={tasktodo.id} tasktodo={tasktodo} />
          ))}
    </div>
  );
};

export default ListTask;
