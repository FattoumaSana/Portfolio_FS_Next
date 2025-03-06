import Link from 'next/link';
import styles from './ProjetCard.module.css';
import Image from 'next/image'; // Importez le composant Image

export default function ProjetCard({ project }) {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive" // Rend l'image responsive
                    width={600} // Largeur de l'image (ajustez selon vos besoins)
                    height={400} // Hauteur de l'image (ajustez selon vos besoins)
                    objectFit="cover" // Ajuste l'image pour couvrir le conteneur
                />
            </div>
            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={project.link} className={styles.link}>
                    Voir le projet
                </Link>
            </div>
        </div>
    );
}