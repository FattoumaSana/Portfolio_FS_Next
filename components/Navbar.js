"use client";
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react'; // Importez useState

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Fattouma Sana
            </Link>
            <div className={styles.hamburger} onClick={toggleMenu}> {/* Bouton hamburger */}
                <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
            </div>
            <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}> {/* Liens de navigation */}
                <Link href="/a-propos">À propos</Link>
                <Link href="/projets">Projets</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}