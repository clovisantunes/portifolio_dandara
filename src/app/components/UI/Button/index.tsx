import styles from './styles.module.scss';

interface buttonProps{
    text: string;
}

export default function ButtonUI({text}: buttonProps){
    return(
        <>
            <button className={styles.buttonCard}>
                {text}
            </button>
        </>
    )
}