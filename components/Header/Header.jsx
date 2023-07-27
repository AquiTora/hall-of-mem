import styles from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Зал памяти</h1>
            
            <div className={styles.inputSection}>
                <input />
                <button>
                    Поиск
                </button>
            </div>
        </div>
    )
}

export default Header;