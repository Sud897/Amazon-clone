import React from 'react'
import styles from "./Home.module.css"

export default function SecondContainer() {
    return (
        <div className={styles['outer-second-container']}>
            <div className={styles['second-container']}>
                <div className={styles['second-box']}>
                    <h1>Movie rentals on Prime Video | Store</h1>
                    <p>
                        Where you can get your Early Access Ticket to rent new movies
                    </p>
                    <button className={styles['btn']}>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    )
}
