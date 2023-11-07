import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotesMobilePage.css";
import enter from "../../assets/icons/enter.png";
import back from "../../assets/icons/back.png";
import home from "../../assets/home.png";
import NotesContent from "../NotesContent/NotesContent";
import usePocketContext from "../../hooks/usePocketContext";

function NotesMobilePage() {
  const [text, setText] = useState("");     // State to manage the text input for notes
  const [bgColor, setBgColor] = useState("#fff");     // State to manage the background color of the selected group
  const [initials, setInitials] = useState("");     // State to store initials of the group name
  const [selectedTitle, setSelectedTitle] = useState("");     // State to store the formatted group name
  const navigate = useNavigate();   // React Router's navigate function for navigation
  const { notes, setNotes, selected, setSelected } = usePocketContext();   // Access notes, setNotes, selected, and setSelected from the context

  useEffect(() => {
    // Load selected group, notes, and its properties from localStorage
    setSelected(localStorage.getItem("selected") || "");
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);

    const groupNames = JSON.parse(localStorage.getItem("groupNames"));

    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0) + word.charAt(1))
          .join("")
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [setSelected, setNotes, selected]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
      setText("");
    }
  };

  const handleSaveNotes = (e) => {
    // Save a new note to the selected group in localStorage
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const goBack = () => {
    setSelected("");
    navigate("/");
  };

  return (
    <div className="mobiles-page">
      <div className="mobiles-notes-title">
        <img src={back} alt="back" onClick={goBack} />
        <div
          className="content-color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="title-text">
          {selectedTitle}
        </div>
      </div>
      <div className="page-body">
        {notes.length === 0 ? (
          <div
            className="body-empty"
            style={{ backgroundImage: `url(${home})` }}
          ></div>
        ) : (
          <div>
            {notes.map((note, index) => (
              <NotesContent key={index} note={note} />
            ))}
          </div>
        )}
      </div>
      <div className="mobile-input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default NotesMobilePage;
