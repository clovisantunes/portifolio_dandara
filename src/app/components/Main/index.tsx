import Image from 'next/image';
import styles from './styles.module.scss';
import perfil from '../../assets/perfil.jpg';
import hello from '../../assets/hello.png';
import { FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

interface MainProps{
    id: string;
}

export default function MainItem({id}: MainProps) {
    return (
        <>
            <div className={styles.mainComponent} id={id}>
                <div className={styles.mainText}>
                    <Image src={hello} alt='Hello' />
                    <h1>
                        Dandara
                    </h1>
                    <h1 className={styles.title}>
                        Bianca<p>!</p>
                    </h1>
                    <span>
                        Designer UI/UX
                    </span>
                    <div className={styles.icons}>
                        <a
                            href="https://www.linkedin.com/in/dandara-bianca-nass-grabim-0b3591260/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a 
                            href="mailto:mailto:dandarabiancas@gmail.com" 
                            aria-label="E-mail"
                        >
                            <IoMailSharp size={24} />
                        </a>
                    </div>
                </div>
                <div className={styles.mainImage}>
                    <Image src={perfil} alt='Imagem de perfil' />
                </div>
            </div>
        </>
    );
}
