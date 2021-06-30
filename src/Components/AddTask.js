import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    text.trim()
      ? dispatch(addTask({ id: Math.random(), action: text, isDone: false }))
      : alert("please fill the input");
    setText("");
  };
  return (
    <div>
      <h1 className="title">  TODO  </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <div>
        <button type="submit" onClick={handleAdd}>
          INSERT
        </button>
      </div>
    </div>
  );
};

export default AddTask;
