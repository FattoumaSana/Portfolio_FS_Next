import Head from 'next/head';
import styles from './Services.module.css';

export default function Services() {
    return (
        <div>
            <Head>
                <title>Mes services</title>
                <meta name="description" content="Découvrez les services que je propose." />
            </Head>
            <main className={styles.main}>
                <h1>Mes Services</h1>
                <div className={styles.service}>
                    <h2>Développement Web</h2>
                    <p>Description du service de développement web...</p>
                </div>
                <div className={styles.service}>
                    <h2>Marketing Digital</h2>
                    <p>Description du service de marketing digital...</p>
                </div>
                {/* Ajoutez d'autres services ici */}
            </main>
        </div>
    );
}