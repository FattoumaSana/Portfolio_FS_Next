import Link from 'next/link';
import styles from './ProjetCard.module.css';

export default function ProjetCard({ project }) {
    return (
        <div className={styles.project}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href={project.link}>Voir le projet</Link>
        </div>
    );
}