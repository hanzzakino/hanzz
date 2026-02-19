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
                <title>Hanz Aquino — Frontend Developer</title>
                <meta
                    name="description"
                    content="Hanz Aquino — portfolio, projects, and contact."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hanzz.vercel.app/" />
                <meta property="og:title" content="Hanz Aquino" />
                <meta
                    property="og:description"
                    content="Portfolio and projects by Hanz Aquino."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Hanz Aquino Portfolio" />
                <meta property="og:url" content="https://hanzz.vercel.app/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Hanz Aquino',
                            url: 'https://hanzz.vercel.app',
                            sameAs: ['https://github.com/hanzzakino'],
                            jobTitle: 'Software Developer',
                        }),
                    }}
                />
            </Head>
            {/* <Navbar /> */}
            <main className={styles.mainContainer + ' ' + theme}>
                <AnimatedBackground
                    speedMultiplier={0.9}
                    opacity={0.25}
                    maxBlur={6}
                    enableBlur
                />
                <SectionIndicator />
                <Introduction />
                <About />
                <Projects />
                <Footer />
            </main>
        </div>
    )
}
