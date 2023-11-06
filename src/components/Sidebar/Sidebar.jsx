import React, { useEffect, useState } from "react";
import './sidebar.css'
import NotesTitle from "../NotesSidebar/NotesTitle";
import Popup from "../../components/Popup/Popup"

const Sidebar = () => {
    const [titles, setTitles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupNamesParent, setGroupNamesParent] = useState(
        localStorage.getItem("groupNames") || []
    )

    const handleClick = () => {
        setShowPopup(true);
    }

    const handleClose = () => {
        setShowPopup(false);
    }

    useEffect(() => {
        const data = localStorage.getItem("groupNames");
        if (data) {
            setGroupNamesParent(JSON.parse(data));
        } else {
            setGroupNamesParent([]);
        }
    }, []);

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
                <button className="addbutton" onClick={handleClick}>
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
