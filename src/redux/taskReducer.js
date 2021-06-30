import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actionTypes";

const init = {
  todos: [],
};

const taskReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todoel) => todoel.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((todoel) =>
          todoel.id === payload ? { ...todoel, isDone: !todoel.isDone } : todoel
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
