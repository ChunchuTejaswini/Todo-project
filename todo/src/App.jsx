import React, {useEffect, useState } from "react";
import "./App.css";
import Taskform from "./Taskform";
import Taskcolumn from "./Taskcolumn";
import doing from "./assets/glowing-star.png";
import todo from "./assets/direct-hit.png";
import done from "./assets/check-mark-button.png";

const oldtasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, settasks] = useState(JSON.parse(oldtasks) || []);
  const [activecard, setactivecard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handledelete = (taskIndex) => {
    const newtasks = tasks.filter((task, index) => index !== taskIndex);
    settasks(newtasks);
  };
  const ondrop = (status, position) => {
    if (activecard === null || activecard === undefined) return;

    const tasktomove = tasks[activecard];
    const updatedtasks = tasks.filter((task, index) => index !== activecard);
    updatedtasks.splice(position, 0, {
      ...tasktomove,
      status: status,
    });
    settasks(updatedtasks);
  };

  return (
    <div className="app">
      <Taskform settasks={settasks} />
      <main className="app_main">
        <Taskcolumn
          title="Todo"
          icon={todo}
          tasks={tasks}
          status="todo"
          handledelete={handledelete}
          setactivecard={setactivecard}
          ondrop={ondrop}
        />
        <Taskcolumn
          title="Doing"
          icon={doing}
          tasks={tasks}
          status="doing"
          handledelete={handledelete}
          setactivecard={setactivecard}
          ondrop={ondrop}
        />
        <Taskcolumn
          title="Done"
          icon={done}
          tasks={tasks}
          status="done"
          handledelete={handledelete}
          setactivecard={setactivecard}
          ondrop={ondrop}
        />
      </main>
    </div>
  );
};

export default App;
