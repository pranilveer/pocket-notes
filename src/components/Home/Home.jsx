import React from "react"
import "./Home.css"
import HomeImg from "../../assets/home.png"
import LockImg from "../../assets/icons/lock.png"
import NotesImg from "../../assets/notes.jpg"

const Home = () => {
    return (
        <div className="homepage">
            <div className="home">
                {/* Display the Pocket Notes logo */}
                <img src={HomeImg} alt="home img" className="img1" />

                {/* Display the title and description */}
                <h1 className="p">Pocket Notes</h1>
                <p className="p">Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>

                {/* Display the "end-to-end encrypted" label with a lock icon */}
                <div className="homebottom">
                    <img src={LockImg} alt="lock img" className="img2" />
                    <span>end-to-end encrypted</span>
                </div>
            </div>

            {/* Mobile home section with background image and text */}
            <div className="mobilehome" style={{backgroundImage: `url(${NotesImg})`}}>
                Create Your First Note...
            </div>
        </div>
    )
}

export default Home;
