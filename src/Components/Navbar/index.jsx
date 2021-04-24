import React from 'react'
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.leftNav}>
                <a href="#">About</a>
                <a href="#">Store</a>
                </div>
                <div className={styles.rightNav}>
                <a href="#">Gmail</a>
                <a href="#">Images</a>
                <i></i>
                </div>
            </div>
        </div>
    )
}
