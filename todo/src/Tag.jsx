import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selecttag, checktag }) => {
  const tagstyle = {
    Html: { backgroundColor: "#e34c26" }, // orange
    Css: { backgroundColor: "#264de4" },
    React: { backgroundColor: "#61dafb" },
    "Java Script": { backgroundColor: "#dd1b16" },
    default: { backgroundColor: "#e0e0e0" },
  };
  return (
    <div>
      <button type="button" className="tag" onClick={() => selecttag(tagName)}
        style={checktag?tagstyle[tagName]:tagstyle.default}
        >
        {tagName}

      </button>
    </div>
  );
};

export default Tag;
