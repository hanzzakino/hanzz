import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Introduction from '../components/introduction';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hanz Aquino</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div >

      <main className={styles.main_container}>
      
      <Introduction />

      </main>

    </div>
  )
}