import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css"
import NotesTitle from "../NotesSidebar/NotesTitle";
import Popup from "../Popup/Popup";

const Sidebar = () =>{
    const [titles, setTitles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupNamesParent, setGroupNamesParent] = useState(
        localStorage.getItem("groupNames") || []
    )

    const handleClick = () =>{
        setShowPopup(true);
    }

    const handleClose = () => {
        setShowPopup(false);
    }

    useEffect(()=>{
        const data = localStorage.getItem("groupNames");
        if(data){
            setGroupNamesParent(JSON.parse(data));
        }else{
            setGroupNamesParent([]);
        }
    }, []);

    useEffect(()=>{
        if(groupNamesParent.length >0){
            const obj = JSON.parse(localStorage.getItem("groupNames"));
            const result = Object.keys(obj).map((key) => [obj[key]]);
            setTitles(result);
        }
    }, [groupNamesParent]);

    return (
      <div className={styles.sidebar}>
        <div className={styles.title}>Pocket Notes</div>
        <div className={styles.notesBtn}>
            <button className={styles.addbutton} onClick={handleClick}>
                <span className={styles.add}>+</span>
                <span>Create Notes Group</span>
            </button>
        </div>
        <div className={styles.notesTitle}>
            {titles.length > 0 ?(
                titles.map((title, index) => <NotesTitle key={index} title={title} />)
            ):(
                <div>
                    <p>No Notes Group Created</p>
                </div>
            )}
        </div>
        { showPopup && (
            <div className={styles.popup}>
                <Popup groupNamesParent={groupNamesParent} setGroupNamesParent={setGroupNamesParent} onClose={handleClose}/>
            </div>
        )}
      </div>
    )

}

export default Sidebar;
