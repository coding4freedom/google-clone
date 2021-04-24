import React from 'react';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
            </div>
            <div className={styles.mid}>
            <a href="#">Carbon neutural since 2007</a>
            </div>
            <div className={styles.right}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
            </div>
        </div>
    )
}
