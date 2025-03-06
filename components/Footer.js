import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importez les icônes

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Fattouma Sana. Tous droits réservés.</p>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/FattoumaSana" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:fs.benissia@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="tel:+21652344796">
                    <FaPhone />
                </a>
            </div>
        </footer>
    );
}