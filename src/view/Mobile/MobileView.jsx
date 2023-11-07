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
      // Load group names from local storage and set state
      const data = localStorage.getItem("groupNames");
      if (data) {
        setGroupNamesParent(JSON.parse(data));
      } else {
        setGroupNamesParent([]);
      }
    }, []);
  
    useEffect(() => {
      if (groupNamesParent.length > 0) {
        // Extract titles from the groupNamesParent state and set in titles state
        const obj = JSON.parse(localStorage.getItem("groupNames"));
        const result = Object.keys(obj).map((key) => [obj[key]]);
        setTitles(result);
      }
    }, [groupNamesParent]);
  
    const handleClick = () => {
      // Show the popup when the "Create Notes Group" button is clicked
      setShowPopup(true);
    };
  
    const handleClose = () => {
      // Close the popup when the user clicks outside or uses the "X" button
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
                    // Render NotesMobile components for each group
                    titles.map((title, index) => (
                        <NotesMobile
                            title={title}
                            key={index}
                        />
                    ))
                ) : (
                    // Render the Home component if no groups are available
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
