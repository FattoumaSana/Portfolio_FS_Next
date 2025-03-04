import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Fattouma Sana. Tous droits réservés.</p>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                {/* Ajoutez d'autres liens de réseaux sociaux ici */}
            </div>
        </footer>
    );
}