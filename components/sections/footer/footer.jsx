import styles from '../../../styles/sections/Footer.module.css'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.line1}>
                {'Designed & Developed by Hanz Aquino'}
            </p>
            <a
                className={styles.line2}
                href="https://github.com/hanzzakino/hanzz"
            >
                <BsGithub className={styles.icon} />
                {'github.com/hanzzakino/hanzz'}
            </a>
        </footer>
    )
}
