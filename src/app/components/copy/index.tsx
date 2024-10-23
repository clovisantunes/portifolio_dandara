import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://devroom.tech/" target="_blank" rel="noopener noreferrer">
                <span>
                Copyright © DevRoom · 2024
                </span>
            </Link>
        </footer>
    );
}
