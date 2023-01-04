import Head from 'next/head'
import { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Introduction from '../components/introduction';
import Navbar from '../components/navbar';
import AnimatedBackground from '../components/shared/animatedBackground';



export default function Home() {

  return (
    <div>
      <Head>
        <title>Hanz Aquino</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <AnimatedBackground speedMultiplier={0.9} opacity={0.24} maxBlur={6} enableBlur/>

      <main className={styles.mainContainer}>
        <Introduction />
      </main>

    </div>
  )
}