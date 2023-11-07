import React, { useEffect, useState } from "react";
import './sidebar.css'
import NotesTitle from "../NotesSidebar/NotesTitle";
import Popup from "../../components/Popup/Popup"

const Sidebar = () => {
    // State for titles, showPopup, and groupNamesParent
    const [titles, setTitles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupNamesParent, setGroupNamesParent] = useState(
        localStorage.getItem("groupNames") || []
    )

    // Function to handle the "Create Notes Group" button click
    const handleClick = () => {
        setShowPopup(true);
        console.log("clicked");
    }

    // Function to close the popup
    const handleClose = () => {
        setShowPopup(false);
    }

    // Effect to load group names from local storage
    useEffect(() => {
        const data = localStorage.getItem("groupNames");
        if (data) {
            setGroupNamesParent(JSON.parse(data));
        } else {
            setGroupNamesParent([]);
        }
    }, []);

    // Effect to convert groupNamesParent into titles for rendering
    useEffect(() => {
        if (groupNamesParent.length > 0) {
            const obj = JSON.parse(localStorage.getItem("groupNames"));
            const result = Object.keys(obj).map((key) => [obj[key]]);
            setTitles(result);
        }
    }, [groupNamesParent]);

    return (
        <div className="sidebar">
            <div className="maintitle">Pocket Notes</div>
            <div className="notesBtn">
                <button className="add-button" onClick={handleClick}>
                    <span className="add">+</span>
                    <span>Create Notes Group</span>
                </button>
            </div>
            <div className="notesTitle">
                {titles.length > 0 ? (
                    titles.map((title, index) => <NotesTitle key={index} title={title} />)
                ) : (
                    <div>
                        <p>No Notes Group Created</p>
                    </div>
                )}
            </div>
            {showPopup && (
                <div className="popupbody">
                    <Popup groupNamesParent={groupNamesParent} setGroupNamesParent={setGroupNamesParent} onClose={handleClose}/>
                </div>
            )}
        </div>
    )
}

export default Sidebar;
