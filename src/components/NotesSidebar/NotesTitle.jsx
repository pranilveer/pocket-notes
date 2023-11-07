import React from 'react'
import "./NotesTitle.css"
import usePocketContext from "../../hooks/usePocketContext"

const NotesTitle = ({ title }) => {
  // Access selected and setSelected from the context
  const { selected, setSelected } = usePocketContext();

  // Extract initials from the group name for the logo
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0) + word.charAt(1))
    .join("")
    .toUpperCase();

  // Format the group name for display
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Handle click event to select the group
  const handleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div onClick={handleClick} className={`grouplogo ${selected === title[0].name && "titlehighlight"}`}>
      <div className="titlelogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="grouptitle">{newTitle}</div>
    </div>
  )
}

export default NotesTitle;
