import React from "react";
import todo from "./assets/direct-hit.png";
import "./Taskcolumn.css";
import Taskcard from "./Taskcard";
import Droparea from "./Droparea";

const Taskcolumn = ({
  title,
  icon,
  tasks,
  status,
  handledelete,
  setactivecard,
  ondrop
}) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="todo" />
          {title}
        </h2>
        <Droparea ondrop={()=>ondrop(status,0)}/>
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <React.Fragment   key={index}>
              <Taskcard
              
                title={task.task}
                tags={task.tags}
                handledelete={handledelete}
                index={index}
                setactivecard={setactivecard}
              />
              <Droparea ondrop={()=>ondrop(status,index+1)}/>
              </React.Fragment>
            )
        )}
      </section>
    </div>
  );
};

export default Taskcolumn;
