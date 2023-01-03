import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
        <nav>
            <img src="/assets/logo/logo.svg" alt='logo'/>
            <ul>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}