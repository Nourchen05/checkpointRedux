import { findByLabelText } from "@testing-library/react";
import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, update_task, done_task } from "../../Redux/actions";
import { useState } from "react";

const Task = ({ tasktodo }) => {
  let dispatch = useDispatch();
  const [edittable, setedittable] = useState(false);
  const [state, setstatus] = useState("All");
  const [task, settask] = useState("");
  return (
    <div className="row mx-2 align-items-center">
      <div className="col">
        {edittable ? (
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
        ) : (
          <p>{tasktodo.task}</p>
        )}
      </div>

      <button
        className="btn btn-warning m-2"
        onClick={() => {
          dispatch(update_task({ ...tasktodo, task }));
          if (edittable) {
            settask(tasktodo.task);
          }
          setedittable(!edittable);
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch(delete_task(tasktodo.id))}
      >
        Delete
      </button>
      <button
        className="btn btn-light m-2"
        onClick={() => dispatch(done_task(tasktodo.id))}
      >
        {tasktodo.isdone ? "Undone" : "Done"}
      </button>
    </div>
  );
};

export default Task;
