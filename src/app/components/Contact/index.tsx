"use client";
import styles from './styles.module.scss';
import contact from '../../assets/contact.png';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { BsCopy } from "react-icons/bs";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiArrowUp } from "react-icons/fi";

interface ContactProps {
    id: string;
}

export default function Contact({id}: ContactProps) {
    const email = "dandarabiancas@gmail.com";
    const whatsappNumber = "+555194742528"; 

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
        toast.success('Email copiado!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={styles.ContactComponents} id={id}>
                <Image src={contact} alt='contact item' />
                <h2>Vamos conversar!</h2>

                <div className={styles.contactButtons}>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappButton}
                    >
                        <FaWhatsapp /> Vamos conversar
                    </a>

                    <div className={styles.emailContainer}>
                        <span>
                            <PiPaperPlaneTiltThin />
                        </span>
                        <span>E-mail:</span>
                        <span className={styles.email}>{email}</span>
                        <button onClick={copyEmailToClipboard} className={styles.copyButton}>
                            <BsCopy />
                        </button>
                    </div>
                </div>
            </div>

            <button onClick={scrollToTop} className={styles.backToTopButton}>
                Voltar ao Topo <FiArrowUp />
            </button>
        </>
    );
}
