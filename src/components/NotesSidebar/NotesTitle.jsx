import React from 'react'
import "./NotesTitle.css"
import usePocketContext from "../../hooks/usePocketContext"

const NotesTitle = ({ title }) => {
  const { selected, setSelected } = usePocketContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0) + word.charAt(1))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() +word.slice(1))
    .join(" ");

  const handleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div onClick={handleClick} className={`grouplogo ${selected === title[0].name && "titlehighlight" }`}>
      <div className="titlelogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="grouptitle">{newTitle}</div>
    </div>
  )
}

export default NotesTitle;