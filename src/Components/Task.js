import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/actions";


const Task = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <h5 id={todos.isDone ? "done" : ""}> {todos.action} </h5>

      <div className="task-btn">
        <button className="chbtn" onClick={() => dispatch(completeTask(todos.id))} > 
          {todos.isDone ? "UNCHECK" : "CHECK"}
        </button>
     
        <button className="delbtn" onClick={() => dispatch(deleteTask(todos.id))}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Task;
