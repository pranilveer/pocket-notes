import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import "./MainPage.css";
import Home from "../../components/Home/Home.jsx";
import Notes from "../../components/Notes/Notes.jsx";
import usePocketContext from "../../hooks/usePocketContext.jsx";

const MainPage = () =>{
    const { selected } = usePocketContext();

    return (
        <div className="mainpage">
            <Sidebar />
            {selected.length > 0 ? <Notes /> : <Home />}
        </div>
    )

}

export default MainPage;
