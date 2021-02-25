import { ADD_TASK, DELETE_TASK, UPDATE_TASK, DONE_TASK } from "./actionsType";

export const add_task = (payload) => {
  return { type: ADD_TASK, payload };
};

export const delete_task = (payload) => {
  return { type: DELETE_TASK, payload };
};
export const update_task = (id) => {
  return { type: UPDATE_TASK, payload: id };
};
export const done_task = (id) => {
  return { type: DONE_TASK, payload: id };
};
