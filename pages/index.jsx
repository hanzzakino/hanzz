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
                <SectionIndicator />
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
