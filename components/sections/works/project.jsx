import { useSettingsContext } from '../../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import styles from '../../../styles/sections/Project.module.css'
import Image from 'next/image'

export default function Project({ content, index }) {
    const { theme } = useSettingsContext()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
        triggerOnce: true,
    })

    const icons = {
        java: '/assets/logo/tech/java3.svg',
        python: '/assets/logo/tech/python.svg',
        cpp: '/assets/logo/tech/cpp.svg',
        js: '/assets/logo/tech/javascript.svg',
        vb: '/assets/logo/tech/vb.svg',
        nextjs: '/assets/logo/tech/nextjs.svg',
        react: '/assets/logo/tech/reactjs.svg',
        p5js: '/assets/logo/tech/p5js2.svg',
        bootstrap: '/assets/logo/tech/bootstrap.svg',
        eectronjs: '/assets/logo/tech/electronjs.svg',
        dotnet: '/assets/logo/tech/dotnet.svg',
        javafx: '/assets/logo/tech/java3.svg',
        pyqt: '/assets/logo/tech/qt.svg',
        firebase: '/assets/logo/tech/firebase.svg',
        mongodb: '/assets/logo/tech/mongodb1.svg',
    }
    const names = {
        java: 'Java',
        python: 'Python',
        cpp: 'C++',
        js: 'JavaScript',
        vb: 'Visual Basic',
        nextjs: 'NextJS',
        react: 'ReactJS',
        p5js: 'p5.js',
        bootstrap: 'Bootstrap',
        eectronjs: 'ElectronJS',
        dotnet: '.NET',
        javafx: 'JavaFX',
        pyqt: 'PyQT',
        firebase: 'Firebase',
        mongodb: 'MongoDB',
    }

    return (
        <div
            className={
                styles.container +
                (inView
                    ? ' animation_slideUp100s1 aimation_delay15 uhiddenOp'
                    : ' hiddenOp')
            }
            ref={ref}
        >
            <div
                className={
                    styles.projectContainer +
                    ' ' +
                    (index % 2 !== 0 ? '' : styles.reversed)
                }
            >
                <div className={styles.detailsContainer}>
                    <p className={styles.projectType}>{content.type}</p>
                    <h1 className={styles.projectTitle}>{content.title}</h1>
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
                                        src={icons[tech]}
                                        width={64}
                                        height={64}
                                        alt={tech}
                                    />
                                    <p key={tech + content.title + '__002'}>
                                        {names[tech]}
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
        </div>
    )
}
