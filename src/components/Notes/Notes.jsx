import React, { useState, useEffect } from "react";
import "./Notes.css"
import NotesContent from "../NotesContent/NotesContent";
import usePocketContext from "../../hooks/usePocketContext";
import enter from "../../assets/icons/enter.png"

const Notes = () => {
    const [text, setText] = useState("");
    const [bgColor, setBgColor] = useState("#fff");
    const [initials, setInitials] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const { notes, setNotes, selected } = usePocketContext();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSaveNotes = () => {
        if (!text.trim()) {
            return;
        }
        const notes = JSON.parse(localStorage.getItem(selected)) || [];
        const newNoteObj = {
            id: Date.now(),
            title: selected,
            content: text.trim(),
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

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSaveNotes();
        }
    };

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem(selected)) || []);
        const groupNames = JSON.parse(localStorage.getItem("groupNames"));
        const selectedGroup = groupNames.find((group) => group.name === selected);
        if (selectedGroup) {
            setBgColor(selectedGroup.color);
            setInitials(selectedGroup.name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase());
            setSelectedTitle(selectedGroup.name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
        }
    }, [selected, setNotes]);

    return (
        <div className="notesbody">
            <div className="title1">
                <div className="titlecolor" style={{ backgroundColor: bgColor }}>{initials}</div>
                <div className="titletext">{selectedTitle}</div>
            </div>

            <div className="notescontent">
                {notes && notes.length > 0 ?
                    notes.map((note, index) => (
                        <NotesContent key={index} note={note} />
                    )) : null}
            </div>

            <div className="input1">
                <textarea value={text} placeholder="Enter your notes here" onChange={handleChange} onKeyDown={handleKeyDown}>
                </textarea>
                <img src={enter} alt="enter img" onClick={handleSaveNotes} className="input1img"/>
            </div>
        </div>
    )
}

export default Notes;