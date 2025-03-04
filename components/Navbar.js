import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Fattouma Sana
            </Link>
            <div className={styles.navLinks}>
                <Link href="/a-propos">À propos</Link>
                <Link href="/projets">Projets</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}