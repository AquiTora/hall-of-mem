import styles from './Header.module.scss';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Link href='/'>Зал памяти</Link>
            </div>

            <div>
                <Link href='/catalog'>Каталог</Link>
                <Link href='/registre'>Регистрация</Link>
            </div>          

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