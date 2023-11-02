import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import styles from "./MainPage.module.css";
import NotesTitle from "../components/NotesSidebar/NotesTitle.jsx";
import usePocketContext from "../components/hooks/usePocketContext.jsx";
import Home from "../components/Home/Home.jsx";

const MainPage = () =>{
    const { selected } = usePocketContext();

    return (
        <div className={styles.body}>
            <Sidebar />
            {selected.length > 0 ? <NotesTitle /> : <Home />}
        </div>
    )

}

export default MainPage;
