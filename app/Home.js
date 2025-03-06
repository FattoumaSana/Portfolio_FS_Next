"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Effet de défilement en douceur
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth',
                    });
                }
            });
        });

        // Animation des compétences et des projets
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                }
            });
        });

        const skills = document.querySelectorAll(`.${styles.skill}`);
        skills.forEach(skill => observer.observe(skill));

        const projects = document.querySelectorAll(`.${styles.project}`);
        projects.forEach(project => observer.observe(project));
    }, []);

    return (
        <div>
            {/* ... (Head, Hero, Compétences, Portfolio, Contact) ... */}
        </div>
    );
}