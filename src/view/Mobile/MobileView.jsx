import React, { useState, useEffect } from "react";
import "./MobileView.css"
import NotesMobile from "../../components/Notes/NotesMobile";
import Home from "../../components/Home/Home";
import Popup from "../../components/Popup/Popup"

const MobileView = () => {
    const [titles, setTitles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupNamesParent, setGroupNamesParent] = useState(
      localStorage.getItem("groupNames") || []
    );
  
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
  
    const handleClick = () => {
      setShowPopup(true);
    };
  
    const handleClose = () => {
      setShowPopup(false);
    };

    return (
        <div className="mobile-sidebar">
            <div className="mobile-title-home">Pocket Notes</div>
            <div className="mobile-create-btn">
                <button onClick={handleClick}>
                    <span id="mobile-add">+</span>
                    <span>Create Notes Group</span>
                </button>
            </div>
            <div className="mobile-notes-title">
                {titles.length > 0 ? (
                    titles.map((title, index) => (
                        <NotesMobile
                            title={title}
                            key={index}
                        />
                    ))
                ) : (
                    <Home />
                )}
            </div>
            {showPopup && (
                <div className="mobile-popup">
                    <Popup
                        onClose={handleClose}
                        groupNamesParent={groupNamesParent}
                        setGroupNamesParent={setGroupNamesParent}
                    />
                </div>
            )}
        </div>
    )
}

export default MobileView;