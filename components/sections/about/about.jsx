import styles from '../../../styles/sections/About.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ScrollTrigger from '../../shared/scrollTrigger'
import { secondaryFont } from '../../../utils/googleFonts'
import { Circle, Curl2Circle, CurlyLine, DotMatrix } from '../../shared/shapes'

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
                <h1 className={styles.title + ' ' + secondaryFont.className}>
                    About me
                </h1>
                <div className={styles.shapeContainer2}>
                    <CurlyLine transformStyle={styles.shape2} />
                </div>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.subtitleContainer}
            >
                <div className={styles.shapeContainer1}>
                    <Circle transformStyle={styles.shape1} />
                </div>
                <h1 className={styles.subtitle}>
                    LET ME <strong>INTRODUCE</strong> MYSELF
                </h1>
            </ScrollTrigger>
            <ScrollTrigger
                animationName="animation_slideUp100s14"
                section={1}
                defaultClassname={styles.intro}
            >
                <p>
                    My Name is <strong>Hanz Christian Aquino</strong>, a
                    <strong> Computer Engineer</strong> and I enjoy programming
                    and developing softwares. <br />
                    Driven by fascination and curiosity about how a computer
                    works, I started to learn programming in
                    <strong> 2017</strong>. I was amazed by the idea that I
                    could instruct a computer to do certain task. I loved the
                    challenge of analytical and mathematical problem solving,
                    and I found programming as a great tool for that.
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
                <div className={styles.shapeContainer3}>
                    <DotMatrix transformStyle={styles.shape3} />
                </div>
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
