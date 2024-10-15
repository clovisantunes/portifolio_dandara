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

export default function Contact() {
    const email = "dandarabiancas@gmail.com";

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
            <div className={styles.ContactComponents}>
                <Image src={contact} alt='contact item' />
                <h2>Vamos conversar!</h2>

                <div className={styles.contactButtons}>
                    <button className={styles.whatsappButton}>
                        <FaWhatsapp /> Vamos conversar
                    </button>

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

            <ToastContainer 
                position="top-right"
                style={{ zIndex: 9999 }} 
            />
        </>
    );
}
