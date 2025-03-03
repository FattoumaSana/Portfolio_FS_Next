import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    Fattouma Sana | Experte Web Marketing & Développeuse Full Stack
                </title>
                <meta
                    name="description"
                    content="Portfolio de Fattouma Sana, experte en web marketing et développeuse full stack. Découvrez mes projets, compétences et expériences."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.parallaxBg}></div>
                <div className={styles.headerContent}>
                    <h1>Fattouma Sana</h1>
                    <p>Experte Web Marketing & Développeuse Full Stack</p>
                    <Link href="/projets" className={styles.cta}>
                        Découvrir mes projets
                    </Link>
                </div>
            </header>

            <main className={styles.main}>
                <section className={styles.intro}>
                    <h2>Bienvenue !</h2>
                    <p>
                        Passionnée par le digital et le développement web, j'aide les
                        entreprises à atteindre leurs objectifs en ligne. Forte de mon
                        expérience en web marketing et de mes compétences en développement
                        full stack, je suis capable de concevoir et de mettre en œuvre des
                        solutions web complètes et performantes.
                    </p>
                </section>

                <section className={styles.skills}>
                    <h2>Mes compétences</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skill}>
                            <img src="/images/html.png" alt="HTML5" />
                            <h3>HTML5</h3>
                        </div>
                        <div className={styles.skill}>
                            <img src="/images/css.png" alt="CSS3" />
                            <h3>CSS3</h3>
                        </div>
                        <div className={styles.skill}>
                            <img src="/images/javascript.png" alt="JavaScript" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className={styles.skill}>
                            <img src="/images/react.png" alt="React" />
                            <h3>React</h3>
                        </div>
                        {/* Ajoute d'autres compétences (PHP, Symfony, WordPress, etc.) */}
                    </div>
                </section>

                <section className={styles.projectsPreview}>
                    <h2>Derniers projets</h2>
                    <div className={styles.projectsGrid}>
                        {/* Affiche ici un aperçu de tes projets (images, titres, descriptions courtes) */}
                        <div className={styles.project}>
                            <img src="/images/projet1.jpg" alt="Projet 1" />
                            <h3>Nom du projet 1</h3>
                            <p>Description courte du projet 1.</p>
                            <Link href="/projets/projet1">Voir le projet</Link>
                        </div>
                        {/* Ajoute d'autres projets */}
                    </div>
                    <Link href="/projets" className={styles.allProjectsLink}>
                        Voir tous les projets
                    </Link>
                </section>
            </main>
        </div>
    );
}
