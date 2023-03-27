import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
const ImageData = [
    { alt: 'LionGate', src: require("../../assets/img1.jpg") },
    { alt: 'Discovery+', src: require('../../assets/img2.jpg') },
    { alt: 'ErosNow', src: require('../../assets/img3.jpg') },
    { alt: 'hoichoi', src: require('../../assets//img4.jpg') },
    { alt: 'DocuBay', src: require('../../assets/img5.jpg') },
    { alt: 'ShortsTv', src: require('../../assets/img6.jpg') },
    { alt: 'MUBI', src: require('../../assets/img7.jpg') },
    { alt: 'manoramamax', src: require('../../assets/img8.jpg') },
    { alt: 'hayu', src: require('../../assets/img9.jpg') },

]

export default function ThirdContainer() {
    return (
        <div className={styles['third-container']}>
            <div className={styles.firstbox2}>
                <h1 className={styles.secondTitle}>Your favorite channels all in one place</h1>
                <p className={styles.secondPara}>
                    With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                </p>
            </div>
            <div className={styles['img-boxes']}>
                {ImageData.map((item, index) => {
                    return (
                        <Link to="/"  key={index}>
                            <img src={item.src} alt={item.alt} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
