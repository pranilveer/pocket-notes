import React from "react";
import "./Notes.css";
import { useNavigate } from "react-router-dom";
import usePocketContext from "../../hooks/usePocketContext";

function NotesMobile({ title }) {
  const navigate = useNavigate();
  const { setSelected } = usePocketContext();
  const initials = title[0].name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const handleTitleClick = () => {
    localStorage.setItem("selected", title[0].name);
    setSelected(title[0].name);
    navigate("/notes");
  };
  return (
    <div onClick={handleTitleClick} className="mobile-notes">
      <div
        className="mobile-icon"
        style={{ backgroundColor: title[0].color }}
      >
        {initials}
      </div>
      <div className="mobile-title">{newTitle}</div>
    </div>
  );
}

export default NotesMobile;
