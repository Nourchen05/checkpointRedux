import { ADD_TASK, DELETE_TASK, UPDATE_TASK, DONE_TASK } from "./actionsType";

//initial state
const initialState = {
  taskstodo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, taskstodo: state.taskstodo.concat(action.payload) };

    case DELETE_TASK:
      return {
        ...state,
        taskstodo: state.taskstodo.filter(
          (tasktodo) => tasktodo.id != action.payload
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        taskstodo: state.taskstodo.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task
        ),
      };

    case DONE_TASK:
      return {
        ...state,
        taskstodo: state.taskstodo.map((task) =>
          task.id == action.payload.id
            ? { ...task, isdone: !task.isdone }
            : task
        ),
      };

    default:
      return state;
  }
};
export default reducer;
