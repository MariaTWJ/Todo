
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
  const taskList = useSelector((state) => state.todos);
  const [elem] = useState(false);
  
  return (
    <div>
      <AddTask />
      {elem
        ? taskList
            .elem((task) => task.isDone)
            .map((el, index) => <Task todos={el} key={index} />)
        : taskList.map((el, index) => <Task todos={el} key={index} />)}
    </div>
  );
};

export default TaskList;