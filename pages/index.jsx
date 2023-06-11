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
import Footer from '../components/footer'

export default function Home() {
    const { theme } = useSettingsContext()
    const [sections, setSections] = useState({
        currentSection: 1,
        sectionList: ['Introduction', 'About Me', 'Projects', 'More...'],
    })

    const { currentSection, numberOfSections } = sections

    return (
        <div>
            <Head>
                <title>Hanz Aquino</title>
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Source+Sans+3:wght@400;600;700;900&display=swap"
                    rel="stylesheet"
                />
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
                </div>
                <Footer />
            </main>
        </div>
    )
}
