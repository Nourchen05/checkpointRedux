import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actionsType";

export const add_task = (payload) => {
  return { type: ADD_TASK, payload };
};

export const delete_task = (payload) => {
  return { type: DELETE_TASK, payload };
};
export const update_task = (payload) => {
  return { type: UPDATE_TASK, payload };
};
