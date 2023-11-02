import React from "react"
import styles from "./Home.module.css"
import HomeImg from "../../assets/home.png"
import Lock from "../../assets/icons/lock.png"

const Home = () => {
    return (
        <div className={styles.body}>
            <img src={HomeImg} alt="home img" className={styles.img1}/>
            <h1 className={styles.p}>Pocket Notes</h1>
            <p className={styles.p}>Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
            <div className={styles.homebottom}>
                <img src={Lock} alt="lock img" className={styles.img2}/>
                <span>end-to-end encrypted</span>
            </div>
        </div>
    )
}

export default Home;