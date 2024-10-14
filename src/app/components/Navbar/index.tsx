"use client";
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importa os ícones
import styles from './styles.module.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
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
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:seuemail@example.com">
                        <AiOutlineMail size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
