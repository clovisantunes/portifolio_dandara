import Image from 'next/image';
import styles from './styles.module.scss';
import perfil from '../../assets/perfil.png';
import hello from '../../assets/hello.png';
import { FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";


export default function MainItem(){
    return(
        <>
            <div className={styles.mainComponent}>
                <div className={styles.mainText}>
                    <Image src={hello}  alt='Hello' />
                    <h1>
                        Dandara
                    </h1>
                    <h1 className={styles.title}>
                        Bianca<p>!</p>
                    </h1>
                    <span>
                        Designer ui/ux
                    </span>    
                    <span>
                        <FaLinkedin /> <IoMailSharp />
                    </span>
                </div>
                <div className={styles.mainImage}>
                    <Image src={perfil} alt='Imagem de perfil' />
                </div>
            </div>
        </>
    )
}