import React, { useState } from "react";
import "./Droparea.css";

const Droparea = ({ ondrop }) => {
  const [showdrop, setshowdrop] = useState(false);
  return (
    <section
      onDragEnter={() => setshowdrop(true)}
      onDragLeave={() => setshowdrop(false)}
      onDrop={()=>{
        ondrop();
        setshowdrop(false);
      }}
      onDragOver={(e)=>e.preventDefault()}
      className={showdrop ? "drop_area" : "hide_drop"}
      
    >
      Droparea
    </section>
  );
};

export default Droparea;
