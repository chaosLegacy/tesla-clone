import Link from 'next/link';
import React, { useState } from 'react';
import { carsType } from '../type';
import styles from './Header.module.css';
import Meta from './Meta';

const Header = ({ cars }: { cars: Array<carsType> }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const scrollToElement = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Meta />
            <nav className={styles.nav}>
                <Link href='/'>
                    <a>
                        <img src="/logo.svg" alt="Tesla logo" />
                    </a>
                </Link>
                <section className={styles.leftMenu}>
                    {
                        cars.map((car, index) => (
                            <a href="#" onClick={(e) => scrollToElement(e, `section-${index + 1}`)} key={index}>{car}</a>
                        ))
                    }
                </section>
                <section className={styles.rightMenu}>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <a href="#" onClick={handleClick}>
                        <img src={click ? '/close.svg' : '/menu.svg'} alt="menu" width={22} />
                    </a>
                    <nav className={click ? `${styles.mobileMenu} ${styles.active}` : `${styles.mobileMenu}`}>
                        <a href="#" className={styles.mobileMenuClose}
                            onClick={handleClick}>
                            <img src="/close.svg" alt="menu" width={28} />
                        </a>
                        {
                            cars.map((car, index) => (
                                <li key={index}>
                                    <a href="#" onClick={(e) => scrollToElement(e, `section-${index + 1}`)}>{car}</a>
                                </li>
                            ))
                        }
                        <li><a href="#">Existing Inventory</a></li>
                        <li><a href="#">Used Inventory</a></li>
                        <li><a href="#">Trade-in</a></li>
                        <li><a href="#">CyberTruck</a></li>
                        <li><a href="#">Roadster</a></li>
                        <li><a href="#">Semi</a></li>
                        <li><a href="#">Power Supply</a></li>
                        <li><a href="#">Utilities</a></li>
                        <li><a href="#">Test Drive</a></li>
                    </nav>
                </section>
            </nav>
        </>
    )
}

export default Header;

