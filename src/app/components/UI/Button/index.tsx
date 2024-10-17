"use client"
import styles from './styles.module.scss';

interface buttonProps{
    text: string;
    onClick: () => void;
}

export default function ButtonUI({text, onClick}: buttonProps){
    return(
        <>
            <button className={styles.buttonCard} onClick={onClick}>
                {text}
            </button>
        </>
    )
}