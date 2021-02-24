import { findByLabelText } from "@testing-library/react";
import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, update_task } from "../../Redux/actions";
import { useState } from "react";

const Task = ({ tasktodo }) => {
  let dispatch = useDispatch();
  const [edittable, setedittable] = useState(false);
  const [task, settask] = useState("");
  return (
    <div className="row mx-2 align-items-center">
      <p className="">{tasktodo.id[2]}</p>
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
    </div>
  );
};

export default Task;
