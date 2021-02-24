import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actionsType";
//import { taskstodo } from "..Components/ListTask/ListTask";

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
      taskstodo = [...state];
      let index = -1;
      for (let i = 0; i < taskstodo.length; i++) {
        if (taskstodo[i].id == action.payload.id) {
          break;
        }
        index++;
      }
      if (index != -1) {
        taskstodo[index] = action.payload;
      }
      return taskstodo;

    default:
      return state;
  }
};
export default reducer;
