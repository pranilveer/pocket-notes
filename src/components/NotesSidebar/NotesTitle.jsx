import React from 'react'
import "./NotesTitle.module.css"
import usePocketContext from "../hooks/usePocketContext"

const NotesTitle = ({ title }) => {
  const { selected, setSelected } = usePocketContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div onClick={handleClick} className={`group__title__logo ${selected === title[0].name ? "highlighted__title" : null
      }`}>
      <div className="title__logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group__title">{newTitle}</div>
    </div>
  )
}

export default NotesTitle;