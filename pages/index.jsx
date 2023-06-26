import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Introduction from '../components/sections/introduction/introduction'
import Navbar from '../components/shared/navbar'
import AnimatedBackground from '../components/shared/animatedBackground'
import { useSettingsContext } from '../context/SettingsContext'
import About from '../components/sections/about/about'
import SectionIndicator from '../components/shared/sectionIndicator'
import Projects from '../components/sections/works/projects'
import Footer from '../components/sections/footer/footer'

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
                <About />
                <Projects />
                <Footer />
            </main>
        </div>
    )
}
