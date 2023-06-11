import styles from '../styles/Skills.module.css'
import { useSettingsContext } from '../context/SettingsContext'
import Image from 'next/image'

export default function Skills() {
    const { theme } = useSettingsContext()
    const skillList = {
        programming: [
            { name: 'Java', iconUrl: '/assets/logo/tech/java3.svg' },
            { name: 'Python', iconUrl: '/assets/logo/tech/python.svg' },
            { name: 'C++', iconUrl: '/assets/logo/tech/cpp.svg' },
            {
                name: 'JavaScript ES6',
                iconUrl: '/assets/logo/tech/javascript.svg',
            },
            { name: 'Visual Basic', iconUrl: '/assets/logo/tech/vb.svg' },
        ],
        webFrameworks: [
            { name: 'NextJS', iconUrl: '/assets/logo/tech/nextjs.svg' },
            { name: 'ReactJS', iconUrl: '/assets/logo/tech/reactjs.svg' },
            { name: 'p5.js', iconUrl: '/assets/logo/tech/p5js2.svg' },
            { name: 'Bootstrap', iconUrl: '/assets/logo/tech/bootstrap.svg' },
        ],
        desktopFrameworks: [
            {
                name: 'ElectronJS',
                iconUrl: '/assets/logo/tech/electronjs.svg',
            },
            { name: '.NET', iconUrl: '/assets/logo/tech/dotnet.svg' },
            { name: 'JavaFX', iconUrl: '/assets/logo/tech/java3.svg' },
            { name: 'PyQT', iconUrl: '/assets/logo/tech/qt.svg' },
        ],
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    About me<i>.</i>
                </h1>
                <div className={styles.intro}>
                    Driven by fascination and curiosity about how a computer
                    works, I started to learn programming in 2017. I was amazed
                    by the idea that I could instruct a computer to do certain
                    task. I loved the challenge of analytical and mathematical
                    problem solving, and I found programming as a great tool for
                    that.
                </div>
            </div>
            <h1 className={styles.subtitle}>What I know?</h1>
            <div className={styles.frameworksContainer}>
                <div className={styles.skillGroupContainer}>
                    <h1 className={styles.skillGroupTitle}>
                        Programming Languages
                    </h1>
                    <div className={styles.skillGroup}>
                        {skillList.programming.map((lang) => (
                            <div
                                className={styles.skillContainer}
                                key={lang.name + '0001'}
                            >
                                <Image
                                    className={styles.skillLogo}
                                    src={lang.iconUrl}
                                    width={64}
                                    height={64}
                                />
                                <p
                                    className={styles.skillName}
                                    key={lang.name + '0002'}
                                >
                                    {lang.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.skillGroupContainer}>
                    <h1 className={styles.skillGroupTitle}>Web Frameworks</h1>
                    <div className={styles.skillGroup}>
                        {skillList.webFrameworks.map((framework) => (
                            <div
                                className={styles.skillContainer}
                                key={framework.name + '0001'}
                            >
                                <Image
                                    className={styles.skillLogo}
                                    src={framework.iconUrl}
                                    width={64}
                                    height={64}
                                />
                                <p
                                    className={styles.skillName}
                                    key={framework.name + '0002'}
                                >
                                    {framework.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.skillGroupContainer}>
                    <h1 className={styles.skillGroupTitle}>
                        Desktop Frameworks
                    </h1>
                    <div className={styles.skillGroup}>
                        {skillList.desktopFrameworks.map((framework) => (
                            <div
                                className={styles.skillContainer}
                                key={framework.name + '1001'}
                            >
                                <Image
                                    className={styles.skillLogo}
                                    src={framework.iconUrl}
                                    width={64}
                                    height={64}
                                />
                                <p
                                    className={styles.skillName}
                                    key={framework.name + '1002'}
                                >
                                    {framework.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
