import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contactez-moi</title>
            </Head>

            <main className={styles.main}>
                <h1>Me Contacter</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="Nom" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
                <div className={styles.contactInfo}>
                    <p>Email: votre.email@example.com</p>
                    <p>Téléphone: +216 12 345 678</p>
                    <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </main>
        </div>
    );
}