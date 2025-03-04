import Link from 'next/link';
import Head from 'next/head';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fattouma Sana - Experte Web Marketing & Développeuse Full Stack</title>
        <meta
          name="description"
          content="Portfolio de Fattouma Sana, experte en web marketing et développement full stack. Découvrez mes services, projets et compétences."
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.parallaxBg}></div>
        <div className={styles.headerContent}>
          <h1>Fattouma Sana</h1>
          <p>Experte Web Marketing & Développeuse Full Stack</p>
          <Link href="/contact" className={styles.cta}>
            Me contacter
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h2>Bienvenue sur mon portfolio</h2>
          <p>
            Je suis passionnée par la création de solutions web innovantes et la mise en place de stratégies marketing efficaces.
          </p>
        </section>

        <section className={styles.skills}>
          <h2>Mes compétences</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <img src="/images/web-development.png" alt="Développement Web" />
              <h3>Développement Web</h3>
            </div>
            <div className={styles.skill}>
              <img src="/images/marketing.png" alt="Marketing Digital" />
              <h3>Marketing Digital</h3>
            </div>
            <div className={styles.skill}>
              <img src="/images/seo.png" alt="SEO" />
              <h3>SEO</h3>
            </div>
            {/* Ajoutez d'autres compétences ici */}
          </div>
        </section>

        <section className={styles.projectsPreview}>
          <h2>Projets en vedette</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.project}>
              <img src="/images/projet1.jpg" alt="Projet 1" />
              <h3>Nom du projet 1</h3>
              <p>Description courte du projet 1.</p>
              <Link href="/projets/projet1" className={styles.allProjectsLink}>
                Voir le projet
              </Link>
            </div>
            {/* Ajoutez d'autres projets en vedette ici */}
          </div>
          <Link href="/projets" className={styles.allProjectsLink}>
            Voir tous les projets
          </Link>
        </section>

        <section className={styles.servicesPreview}>
          <h2>Mes Services</h2>
          <p>Découvrez mes services en web marketing et développement.</p>
          <Link href="/services" className={styles.allProjectsLink}>
            Voir les services
          </Link>
        </section>
      </main>
    </div>
  );
}