import React from 'react'
import styles from "./Home.module.css"
  

export default function FirstContainer() {
    return (
        <div className={styles['outer-container']}>
            <div className={styles['first-container']}>
                <div className={styles['first-box']}>
                    <h1>Welcome to Prime Video</h1>
                    <p>
                        Join Prime to watch the latest movies, TV shows and award winning Amazon Originals
                    </p>
                    <button className={styles['btn']}>
                        Start your 30-day free trail
                    </button>
                    <div className={styles['subpara']}>
                        With select credit or debit cards
                    </div>
                    <button className={styles['btn']}>
                        Annual Prime at Rs 1499
                    </button>
                    <div className={styles['subpara']}>
                        With an electronic payment method
                    </div>
                </div>
            </div>
        </div>
    )
}
