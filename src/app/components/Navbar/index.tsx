"use client";
import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importa os ícones
import styles from './styles.module.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <h1>Dandara</h1>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? (
                    <AiOutlineClose size={25} color="#FFFFFF" /> 
                ) : (
                    <AiOutlineMenu size={25} color="#FFFFFF" />
                )}
            </div>
            <div className={`${styles.sections} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/dandara-bianca-nass-grabim-0b3591260/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:dandarabiancas@gmail.com">
                        <AiOutlineMail size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
