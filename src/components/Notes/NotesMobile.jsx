import React from "react";
import "./Notes.css";
import { useNavigate } from "react-router-dom";
import usePocketContext from "../../hooks/usePocketContext";

function NotesMobile({ title }) {
  // Access the navigate function from React Router
  const navigate = useNavigate();
  // Access the setSelected function from the context
  const { setSelected } = usePocketContext();

  // Extract initials from the group name for the logo
  const initials = title[0].name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word[1].toUpperCase())
    .join("");

  // Format the group name for display
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Handle click event to select the group and navigate to its notes
  const handleTitleClick = () => {
    // Store the selected group name in local storage
    localStorage.setItem("selected", title[0].name);
    // Set the selected group in the context
    setSelected(title[0].name);
    // Navigate to the notes page
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
