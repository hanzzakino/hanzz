import styles from '../styles/Skills.module.css'
import { useSettingsContext } from '../context/SettingsContext'

export default function Skills() {
    const { theme } = useSettingsContext()

    return <div className={styles.skillsContainer}></div>
}
