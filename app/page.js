"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import './global.css' 
import styles from './Home.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.root}> 
      <Head>
        <title>Fattouma Sana - Développeuse Web & Experte Marketing Digital</title>
        <meta
          name="description"
          content="Portfolio de Fattouma Sana, développeuse web passionnée et experte en marketing digital. Découvrez mes projets, compétences et services pour créer des solutions web innovantes."
        />
        <meta name="keywords" content="développeur web, marketing digital, portfolio, Fattouma Sana, projets web, services web" />
        <meta name="author" content="Fattouma Sana" />
        <meta property="og:title" content="Fattouma Sana - Développeuse Web & Experte Marketing Digital" />
        <meta property="og:description" content="Portfolio de Fattouma Sana, développeuse web passionnée et experte en marketing digital. Découvrez mes projets, compétences et services pour créer des solutions web innovantes." />
        <meta property="og:image" content="/images/person-front-computer-working-html.jpg" />
        <meta property="og:url" content="https://www.votresite.com" /> {/* Remplacez par votre URL */}
      </Head>

      <section id="accueil" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Ensemble, créons l'avenir du digital</h2>
          <p className={styles.heroDescription}>
            Développeur passionné, je mets mes compétences à votre service pour des projets innovants et performants. Prêt à relever tous les défis !
          </p>
          <Link href="#portfolio" className={styles.heroButton}>
            Découvrez mes réalisations
          </Link>
        </div>
      </section>

      <section id="competences" className={styles.competences}>
        <div className={styles.competencesContent}>
          <h2 className={styles.competencesTitle}>Mes Compétences</h2>
          <p className={styles.competencesDescription}>
            Elles sont en constantes améliorations car pour moi, la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.
          </p>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <Image src="/images/web-development.png" alt="Développement Web" width={80} height={80} />
              <h3>Développement Web</h3>
              <p>Création de sites web modernes et performants avec les dernières technologies.</p>
            </div>
            <div className={styles.skill}>
              <Image src="/images/marketing.png" alt="Marketing Digital" width={80} height={80} />
              <h3>Marketing Digital</h3>
              <p>Stratégies marketing efficaces pour augmenter votre visibilité en ligne.</p>
            </div>
            <div className={styles.skill}>
              <Image src="/images/seo.png" alt="SEO" width={80} height={80} />
              <h3>SEO</h3>
              <p>Optimisation pour les moteurs de recherche pour un meilleur classement.</p>
            </div>
            {/* Ajoutez d'autres compétences ici */}
          </div>
          <div className={styles.cvSection}>
            <h3 className={styles.cvTitle}>Téléchargez mon CV</h3>
            <a href="./path/to/your-cv.pdf" className={styles.cvButton}>
              Télécharger CV
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <h2 className={styles.portfolioTitle}>Mes Réalisations</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.project}>
              <Image src="/images/projet-1.png" alt="Site vitrine WordPress" width={600} height={400} layout="responsive" />
              <h3>Site vitrine (WordPress)</h3>
              <p>Création d'un site vitrine pour une photographe locale.</p>
              <Link href="/projets/site-vitrine" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
            <div className={styles.project}>
              <Image src="/images/projet-3.png" alt="Site Demo Symfony" width={600} height={400} layout="responsive" />
              <h3>Site Demo (Symfony)</h3>
              <p>Reprise d'un site existant avec Symfony pour améliorer la performance et la sécurité.</p>
              <Link href="/projets/site-demo-symfony" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
            <div className={styles.project}>
              <Image src="/images/projet-4.png" alt="E-commerce WordPress" width={600} height={400} layout="responsive" />
              <h3>E-commerce (WordPress)</h3>
              <p>Création d'une plateforme e-commerce sur WordPress, avec une interface utilisateur optimisée.</p>
              <Link href="/projets/ecommerce-wordpress" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
            <div className={styles.project}>
              <Image src="/images/projet-2.png" alt="Site Media Technologies" width={600} height={400} layout="responsive" />
              <h3>Site Media Technologies</h3>
              <p>Développement d'un site en HTML, PHP, CSS, avec un design minimaliste et responsive.</p>
              <Link href="/projets/site-media-technologies" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
            <div className={styles.project}>
              <Image src="/images/projet-5.png" alt="Site WordPress Laravel" width={600} height={400} layout="responsive" />
              <h3>Site WordPress Laravel</h3>
              <p>Création d'un site web simple avec WordPress pour gérer des événements, avec Laravel comme framework back-end.</p>
              <Link href="/projets/site-wordpress-laravel" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
            <div className={styles.project}>
              <Image src="/images/projet-6.png" alt="Optimisation SEO" width={600} height={400} layout="responsive" />
              <h3>Optimisation SEO</h3>
              <p>Amélioration de la visibilité des sites clients sur les moteurs de recherche grâce à des stratégies de référencement efficaces et adaptées.</p>
              <Link href="/projets/optimisation-seo" className={styles.projectLink}>
                Voir le projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
          <p className={styles.contactText}>N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !</p>
          <div className={styles.contactGrid}>
            <div className={styles.formContainer}>
              <form action="#" method="POST">
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Nom</label>
                  <input type="text" id="name" name="name" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input type="email" id="email" name="email" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea id="message" name="message" rows="5" className={styles.formTextarea} required></textarea>
                </div>
                <button type="submit" className={styles.formButton}>Envoyer</button>
              </form>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedin />
              </a>
              <a href="https://github.com/FattoumaSana" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaGithub />
              </a>
              <a href="mailto:fs.benissia@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaEnvelope />
              </a>
              <a href="tel:+21652344796" className={styles.socialIcon}>
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}