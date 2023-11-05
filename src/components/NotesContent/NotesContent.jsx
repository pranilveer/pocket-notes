import React from "react";
import "./NotesContent.css"

const NotesContent = ({note}) => {
    return (
        <div className="contentbody">
            <div className="datetime">
                <div className="date">{note.date}</div>
                <div className="time">{note.time}</div>
            </div>
            <div className="content">
                <p>{note.content}</p>
            </div>

        </div>
    )
}

export default NotesContent;