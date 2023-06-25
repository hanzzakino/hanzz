import { useSettingsContext } from '../../../context/SettingsContext'
import styles from '../../../styles/sections/FeaturedProject.module.css'
import Image from 'next/image'
import ScrollTrigger from '../../shared/scrollTrigger'

export default function FeaturedProject({ content, index }) {
    const { theme } = useSettingsContext()
    const techInfo = {
        java: { name: 'Java', iconUrl: '/assets/logo/tech/java3.svg' },
        python: { name: 'Python', iconUrl: '/assets/logo/tech/python.svg' },
        cpp: { name: 'C++', iconUrl: '/assets/logo/tech/cpp.svg' },
        js: { name: 'Javascript', iconUrl: '/assets/logo/tech/javascript.svg' },
        vb: { name: 'Visual Basic', iconUrl: '/assets/logo/tech/vb.svg' },
        nextjs: { name: 'NextJS', iconUrl: '/assets/logo/tech/nextjs.svg' },
        react: { name: 'ReactJS', iconUrl: '/assets/logo/tech/reactjs.svg' },
        p5js: { name: 'p5js', iconUrl: '/assets/logo/tech/p5js2.svg' },
        bootstrap: {
            name: 'Bootstrap',
            iconUrl: '/assets/logo/tech/bootstrap.svg',
        },
        electronjs: {
            name: 'ElectronJS',
            iconUrl: '/assets/logo/tech/electronjs.svg',
        },
        dotnet: { name: '.NET', iconUrl: '/assets/logo/tech/dotnet.svg' },
        javafx: { name: 'JavaFX', iconUrl: '/assets/logo/tech/java3.svg' },
        pyqt: { name: 'PyQT', iconUrl: '/assets/logo/tech/qt.svg' },
        firebase: {
            name: 'Firebase',
            iconUrl: '/assets/logo/tech/firebase.svg',
        },
        mongodb: { name: 'MongoDB', iconUrl: '/assets/logo/tech/mongodb1.svg' },
    }

    return (
        <ScrollTrigger
            thresholdValue={0.4}
            initialThresholdValue={0.4}
            animationName="animation_slideUp100s1 aimation_delay15"
            section={2}
            defaultClassname={styles.container}
        >
            <div
                className={
                    styles.projectContainer +
                    ' ' +
                    (index % 2 !== 0 ? '' : styles.reversed)
                }
            >
                <div className={styles.detailsContainer}>
                    <div className={styles.projectTitleContainer}>
                        <p className={styles.projectType}>{content.type}</p>
                        <h1 className={styles.projectTitle}>{content.title}</h1>
                    </div>
                    <p className={styles.projectDescription}>
                        {content.description}
                    </p>
                    <div>
                        <ul className={styles.projectTech}>
                            {content.technologiesUsed.map((tech) => (
                                <div
                                    className={styles.techContainer}
                                    key={tech + content.title + '__001'}
                                >
                                    <Image
                                        className={styles.techIcon}
                                        src={techInfo[tech].iconUrl}
                                        width={64}
                                        height={64}
                                        alt={tech}
                                        key={tech + content.title + '__001a'}
                                    />
                                    <p key={tech + content.title + '__002'}>
                                        {techInfo[tech].name}
                                    </p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    {/* <div className={styles.image2}>
                        <Image
                            src={content.imageURLs[1]}
                            width={1366}
                            height={654}
                        />
                    </div> */}
                    <a href={content.link} target="_blank">
                        <Image
                            className={styles.image1}
                            src={content.imageURLs[0]}
                            width={1366}
                            height={654}
                            alt={content.title}
                        />
                    </a>
                </div>
            </div>
        </ScrollTrigger>
    )
}
