import React, { useState } from "react";
import "./Taskform.css";
import Tag from "./Tag";

const Taskform = ({settasks}) => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checktag=(tag)=>{
    return taskData.tags.some(item=>item===tag)
  }
  const selecttag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredtags = taskData.tags.filter((item) => item !== tag);
      settaskData((prev) => {
        return { ...prev, tags:filteredtags };
      });
    }else{
      settaskData(prev=>{
        return{...prev,tags:[...prev.tags,tag]}
      })
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    settaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    settasks((prev)=>{
      return [...prev,taskData]
    })
    settaskData({
         task: "",
    status: "todo",
    tags: [],
  })
  };

  return (
    <div>
      <header className="app_header">Todo app</header>

      <form onSubmit={handlesubmit}>
        <input
        value={taskData.task}
          name="task"
          type="text"
          placeholder="Enter the task"
          className="task_input"
          onChange={handlechange}
        />

        <div className="task_bottom_line">
          <Tag tagName="Html" selecttag={selecttag} checktag={checktag("Html")} />
          <Tag tagName="Css" selecttag={selecttag} checktag={checktag("Css")}/>
          <Tag tagName="Java Script" selecttag={selecttag} checktag={checktag("Java Script")}/>
          <Tag tagName="React" selecttag={selecttag} checktag={checktag("React")}/>

          <select name="status" className="task_status" onChange={handlechange} value={taskData.status}>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="task_submit">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskform;
