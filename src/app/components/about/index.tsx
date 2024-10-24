"use client"
import Image from 'next/image';
import styles from './styles.module.scss';
import aboutImg from '../../assets/undraw_designer_life_re_6ywf.svg';
import aboutMe from '../../assets/sobremim.png';
import ButtonUI from '../UI/Button';
import { Bounce, toast } from 'react-toastify';

interface aboutProps{
    id: string;
}


export default function About({id}: aboutProps){
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

    return(
        <>
            <div className={styles.mainComponent} id={id}>
                <div className={styles.mainImage}>
                    <Image src={aboutImg} alt='Imagem de perfil' />
                </div>
                <div className={styles.mainText}>
                    <Image src={aboutMe}  alt='Hello' />
                   
                    <span>
                    Olá, sou Dandara Bianca, designer especializada em criar designs interativos e acessíveis. Sou movida pela curiosidade e estou sempre buscando aprender novas abordagens e tendências para aprimorar minhas habilidades. 
                        <p />
                    Tenho experiência com ferramentas como Figma, Photoshop e Lightroom, que utilizo para desenvolver soluções de design criativas e funcionais. Atualmente, estou em busca de novas oportunidades profissionais e sou comprometida em criar designs inovadores e versáteis, capazes de atender às mais diversas necessidades.
                    </span>    
                    <span>
                    </span>
                    <div className={styles.button}>
                    <ButtonUI text='Entre em contato' onClick={copyEmailToClipboard}/>
                    </div>
                </div>
            </div>
        </>
    )
}