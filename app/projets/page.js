import Head from 'next/head';
import styles from '../styles/Projects.module.css';

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Mes projets</title>
            </Head>

            <main className={styles.main}>
                <h1>Mes Réalisations</h1>
                <div className={styles.projectsGrid}>
                    <div className={styles.project}>
                        <img src="/images/projet1.jpg" alt="Projet 1" />
                        <h3>Nom du projet 1</h3>
                        <p>Description détaillée du projet 1...</p>
                        <Link href="/projets/projet1">Voir le projet</Link>
                    </div>
                    {/* Ajoutez d'autres projets ici */}
                </div>
            </main>
        </div>
    );
}