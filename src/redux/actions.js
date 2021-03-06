import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actionTypes";

export const addTask = (newTodo) => {
  return {
    type: ADD_TASK,
    payload: newTodo,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};


