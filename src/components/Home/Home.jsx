import React from "react"
import "./Home.css"
import HomeImg from "../../assets/home.png"
import Lock from "../../assets/icons/lock.png"

const Home = () => {
    return (
        <div className="home">
            <img src={HomeImg} alt="home img" className="img1"/>
            <h1 className="p">Pocket Notes</h1>
            <p className="p">Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
            <div className="homebottom">
                <img src={Lock} alt="lock img" className="img2"/>
                <span>end-to-end encrypted</span>
            </div>
        </div>
    )
}

export default Home;