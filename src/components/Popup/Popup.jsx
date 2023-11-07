import React, { useState } from "react";
import "./Popup.css";

function CreateNotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {
  // State for the group name and background color
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  // Event handler for input changes in the group name field
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  // Event handler to set the background color when a color div is clicked
  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  // Event handler to save the new group name and color
  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="popup">
      <div className="title">Create New Notes Group</div>
      <div className="input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="colorinput">
        <span>Group Color</span>
        <div className="inputcolor">
          {/*
            Render color divs with event handlers and highlight based on the selected background color
          */}
          <div className={`color1 ${bgColor === "rgb(179, 139, 250)" ? `highlight` : null}`} onClick={handleColor}></div>
          <div className={`color2 ${bgColor === "rgb(255, 121, 242)" ? `highlight` : null}`} onClick={handleColor}></div>
          <div className={`color3 ${bgColor === "rgb(67, 230, 252)" ? `highlight` : null}`} onClick={handleColor}></div>
          <div className={`color4 ${bgColor === "rgb(241, 149, 118)" ? `highlight` : null}`} onClick={handleColor}></div>
          <div className={`color5 ${bgColor === "rgb(0, 71, 255)" ? `highlight` : null}`} onClick={handleColor}></div>
          <div className={`color6 ${bgColor === "rgb(102, 145, 255)" ? `highlight` : null}`} onClick={handleColor}></div>
        </div>
      </div>
      <div className="create">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
      <div className="closebtn">
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default CreateNotesPopup;
