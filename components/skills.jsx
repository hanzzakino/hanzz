import styles from '../styles/Skills.module.css'
import { useSettingsContext } from '../context/SettingsContext'

export default function Skills() {
    const { theme } = useSettingsContext()
    const skillList = {
        programming: [
            { name: 'Java', iconUrl: '' },
            { name: 'Python', iconUrl: '' },
            { name: 'C++', iconUrl: '' },
            { name: 'JavaScript ES6', iconUrl: '' },
            { name: 'Visual Basic', iconUrl: '' },
        ],
        webFrameworks: [
            { name: 'NextJS', iconUrl: '' },
            { name: 'ReactJS', iconUrl: '' },
            { name: 'p5.js', iconUrl: '' },
        ],
        desktopFrameworks: [
            { name: 'ElectronJS', iconUrl: '' },
            { name: '.NET', iconUrl: '' },
            { name: 'JavaFX', iconUrl: '' },
            { name: 'PyQT', iconUrl: '' },
        ],
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    Skills<i>.</i>
                </h1>
                <div className={styles.intro}>
                    Driven by fascination and curiosity about how a computer
                    works, I started to learn programming in 2017.
                </div>
            </div>
            <div>
                <h1 className={styles.subtitle}>Programming Languages</h1>
                <div>
                    {skillList.programming.map((lang) => (
                        <div key={lang.name + '0001'}>
                            <p key={lang.name + '0002'}>{lang.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className={styles.subtitle}>Web Frameworks</h1>
                <div>
                    {skillList.webFrameworks.map((framework) => (
                        <div key={framework.name + '0001'}>
                            <p key={framework.name + '0002'}>
                                {framework.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className={styles.subtitle}>Desktop Frameworks</h1>
                <div>
                    {skillList.desktopFrameworks.map((framework) => (
                        <div key={framework.name + '00001'}>
                            <p key={framework.name + '00002'}>
                                {framework.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
