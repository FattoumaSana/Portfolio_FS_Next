import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div>
            <Head>
                <title>À propos de Fattouma Sana</title>
            </Head>

            <main className={styles.main}>
                <h1>Mon Parcours et Mes Valeurs</h1>
                <section className={styles.profile}>
                    <img src="/images/profile.jpg" alt="Fattouma Sana" className={styles.profileImage} />
                    <div>
                        <h2>Fattouma Sana</h2>
                        <p>Passionnée par le digital et forte de plus de 10 ans d'expérience...</p>
                        <p>Chez Evocalix, j'ai développé une expertise en gestion de stratégies digitales et en marketing en ligne...</p>
                    </div>
                </section>

                <section className={styles.skills}>
                    <h2>Mes compétences</h2>
                    <div className={styles.skillsGrid}>
                        {/* Ajoutez ici vos compétences techniques avec des icônes */}
                    </div>
                </section>

                <section className={styles.education}>
                    <h2>Formation</h2>
                    <p>Master en e-marketing - ESSECT Tunis</p>
                    <p>Licence en web marketing - ESSECT Tunis</p>
                    <p>Formation Full Stack - GoMyCode</p>
                </section>

                <section className={styles.languages}>
                    <h2>Langues</h2>
                    <p>Arabe (langue maternelle)</p>
                    <p>Français (courant)</p>
                    <p>Anglais (intermédiaire)</p>
                </section>

                <section className={styles.social}>
                    <h2>Me retrouver</h2>
                    <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </section>
            </main>
        </div>
    );
}