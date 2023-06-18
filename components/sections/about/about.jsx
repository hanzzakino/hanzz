import styles from '../../../styles/sections/About.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function About() {
    const { theme, setCurrentSection } = useSettingsContext()
    const [thresholdDefault, setThresholdDefault] = useState(0.4)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: thresholdDefault,
    })
    const [isViewed, setIsViewed] = useState(false)
    useEffect(() => {
        if (inView) {
            setIsViewed((prevState) => true)
            setCurrentSection(1)
            setThresholdDefault(0.5)
        }
    }, [inView])

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
        <div
            className={
                styles.container + (isViewed ? ' uhiddenOp' : ' hiddenOp')
            }
            ref={ref}
        >
            <div
                className={
                    styles.titleContainer +
                    (isViewed ? ' animation_slideUp100s1 aimation_delay12' : '')
                }
            >
                <h1 className={styles.title}>
                    About me<i>.</i>
                </h1>
                <div className={styles.intro}>
                    Hello! My Name is Hanz Christian Aquino, a Computer Engineer
                    and I enjoy programming and developing softwares. <br />
                    Driven by fascination and curiosity about how a computer
                    works, I started to learn programming in 2017. I was amazed
                    by the idea that I could instruct a computer to do certain
                    task. I loved the challenge of analytical and mathematical
                    problem solving, and I found programming as a great tool for
                    that.
                </div>
            </div>

            <div
                className={
                    styles.subtitleContainer +
                    (isViewed
                        ? ' animation_slideUp100s14 aimation_delay12'
                        : '')
                }
            >
                <h1 className={styles.subtitle}>Technologies I work with</h1>
            </div>

            <div
                className={
                    styles.frameworksContainer +
                    (isViewed
                        ? ' animation_slideUp100s18 aimation_delay12'
                        : '')
                }
            >
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
                                    alt={lang.name}
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
                                    alt={framework.name}
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
                                    alt={framework.name}
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
