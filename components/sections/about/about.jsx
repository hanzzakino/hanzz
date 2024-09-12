import styles from '../../../styles/sections/About.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ScrollTrigger from '../../shared/scrollTrigger'

export default function About() {
    const { theme, setCurrentSection } = useSettingsContext()

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
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.titleContainer}
            >
                <h1 className={styles.title}>About me</h1>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.subtitleContainer}
            >
                <h1 className={styles.subtitle}>
                    LET ME <strong>INTRODUCE</strong> MYSELF
                </h1>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.intro}
            >

My name is Hanz Christian Aquino, a Computer Engineer 




                <p>
                    My Name is <strong>Hanz Christian Aquino</strong>, a
                    <strong> Computer Engineer</strong> with a passion for programming and software development. <br />My journey began in <strong>2017</strong> when my curiosity about how computers work led me to explore programming. The idea of instructing a computer to perform specific tasks fascinated me. I thrive on the challenge of solving analytical and mathematical problems, and programming became my perfect tool to do so.
                </p>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.subtitleContainer}
            >
                <h1 className={styles.subtitle}>
                    <strong>TECHNOLOGIES</strong> I WORK WITH
                </h1>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s18"
                section={1}
                defaultClassname={styles.frameworksContainer}
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
                                    key={lang.name + '0001a'}
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
                                    key={framework.name + '0001b'}
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
                                    key={framework.name + '0001c'}
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
            </ScrollTrigger>
        </div>
    )
}
