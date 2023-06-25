import { useSettingsContext } from '../../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import styles from '../../../styles/sections/OtherProject.module.css'
import Image from 'next/image'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
import ScrollTrigger from '../../shared/scrollTrigger'

export default function OtherProject({ content }) {
    const { theme } = useSettingsContext()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
        triggerOnce: true,
    })
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
        mysql: { name: 'MySQL', iconUrl: '/assets/logo/tech/mongodb1.svg' },
        sqlite: { name: 'SQLite', iconUrl: '/assets/logo/tech/mongodb1.svg' },
        javaprocessing: {
            name: 'Java Processing',
            iconUrl: '/assets/logo/tech/java3.svg',
        },
    }

    return (
        <ScrollTrigger
            thresholdValue={0.2}
            initialThresholdValue={0.2}
            animationName="animation_slideUp100s1 aimation_delay15"
            section={2}
            defaultClassname={styles.container + ' ' + styles[theme]}
        >
            <a
                href={content.repo}
                target="__blank"
                style={{ '--image-url': 'url(' + content.imageURLs[0] + ')' }}
            >
                <div className={styles.detailsContainer}>
                    <div>
                        <div className={styles.iconsContainer}>
                            <BsGithub className={styles.githubIcon} />
                            <BsBoxArrowUpRight className={styles.githubIcon} />
                        </div>
                        <div>
                            <h1 className={styles.projectTitle}>
                                {content.title}
                            </h1>
                            <p className={styles.projectType}>{content.type}</p>
                            <p className={styles.projectDescription}>
                                {content.description}
                            </p>
                        </div>
                    </div>
                    <div>
                        {content.technologiesUsed &&
                            content.technologiesUsed.map((tech, index) => (
                                <span
                                    key={tech + '_112'}
                                    className={styles.projectTech}
                                >
                                    {techInfo[tech].name}
                                    {index !==
                                        content.technologiesUsed.length - 1 &&
                                        '  | '}
                                </span>
                            ))}
                    </div>
                </div>
            </a>
        </ScrollTrigger>
    )
}
