import Head from 'next/head';
import styles from './Contact.module.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer le formulaire, par exemple, via une API ou un service d'email.
        console.log('Formulaire soumis:', formData);
        // Réinitialiser le formulaire après la soumission réussie
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        // Vous pourriez également ajouter un message de confirmation à l'utilisateur ici.
    };

    return (
        <div>
            <Head>
                <title>Contactez-moi</title>
                <meta name="description" content="Contactez-moi pour discuter de vos projets." />
            </Head>
            <main className={styles.main}>
                <h1>Me Contacter</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Envoyer</button>
                </form>
                <div className={styles.contactInfo}>
                    <p>Email: votre.email@example.com</p>
                    <p>Téléphone: +216 12 345 678</p>
                    <a
                        href="https://www.linkedin.com/in/votreprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </main>
        </div>
    );
}