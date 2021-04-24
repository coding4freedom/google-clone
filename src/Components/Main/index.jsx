import styles from "./main.module.css"
import React from 'react'

export default function Main() {
    return (
        <div className={styles.mainContent}>
            <h1>
                <span className={styles.one}>G</span>
                <span className={styles.two}>o</span>
                <span className={styles.three}>o</span>
                <span className={styles.four}>g</span>
                <span className={styles.five}>l</span>
                <span className={styles.six}>e</span>
            </h1>
        </div>
    )
}
