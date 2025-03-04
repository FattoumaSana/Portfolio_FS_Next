import Head from 'next/head';
import styles from './Projects.module.css';
import ProjetCard from '../../components/ProjetCard';

const projects = [
    {
        id: 1,
        title: 'Nom du projet 1',
        description: 'Description détaillée du projet 1...',
        image: '/images/projet1.jpg',
        link: '/projets/projet1',
    },
    {
        id: 2,
        title: 'Nom du projet 2',
        description: 'Description détaillée du projet 2...',
        image: '/images/projet2.jpg',
        link: '/projets/projet2',
    },
    // Ajoutez d'autres projets ici
];

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Mes projets</title>
                <meta name="description" content="Découvrez mes réalisations les plus récentes." />
            </Head>
            <main className={styles.main}>
                <h1>Mes Réalisations</h1>
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <ProjetCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
        </div>
    );
}