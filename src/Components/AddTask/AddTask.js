import React from "react";
import "./AddTask.css";
import { add_task } from "../../Redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";

function AddTask() {
  const [task, settask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add Task</h2>
      <div className="row m-2">
        <input
          type="text"
          className="col form-control"
          onChange={(e) => settask(e.target.value)}
        />
        <button
          className="btn btn-warning mx-2"
          onClick={() =>
            dispatch(add_task({ id: uuid(), task, isdone: false }))
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
