import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Introduction from '../components/introduction'
import Navbar from '../components/navbar'
import AnimatedBackground from '../components/shared/animatedBackground'
import { useSettingsContext } from '../context/SettingsContext'
import Skills from '../components/skills'
import SectionIndicator from '../components/shared/sectionIndicator'
import Projects from '../components/projects'

export default function Home() {
    const { theme } = useSettingsContext()
    const [sections, setSections] = useState({
        currentSection: 1,
        sectionList: ['Introduction', 'Skills', 'Projects', 'More...'],
    })

    const { currentSection, numberOfSections } = sections

    return (
        <div>
            <Head>
                <title>Hanz Aquino</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            {/* <Navbar /> */}
            <main className={styles.mainContainer + ' ' + theme}>
                {/* <AnimatedBackground
                    speedMultiplier={0.9}
                    opacity={0.25}
                    maxBlur={6}
                    enableBlur
                /> */}
                <SectionIndicator sections={sections} />
                <Introduction />
                <Skills />
                {/* <Projects /> */}

                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </main>
        </div>
    )
}
