import Head from 'next/head'
import { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Introduction from '../components/introduction';


export default function Home() {

  const animatedShapes = []
  const shapeNumber = 40
  for(let i=0; i<shapeNumber; i++){
    const tempRandomSize = Math.floor(Math.random()*15)+7
    const tempRandomblur = Math.floor(6*(5/tempRandomSize))
    const tempRandomColor = Math.floor(Math.random()*10)+240
    const tempRandomColor2 = Math.floor(Math.random()*80)+160
    animatedShapes.push(
      <li 
        key={'ashape'+i}
        style={
          ({
            WebkitFilter: 'blur('+tempRandomblur+'px)',
            MozFilter: 'blur('+tempRandomblur+'px)',
            OFilter: 'blur('+tempRandomblur+'px)',
            MsFilter: 'blur('+tempRandomblur+'px)',
            filter: 'blur('+tempRandomblur+'px)',
            background: 'rgb(10,'+tempRandomColor2+','+tempRandomColor+')',
            left: (0.7+(i*(100/shapeNumber))).toString()+'%',
            width: tempRandomSize.toString()+'px',
            height: tempRandomSize.toString()+'px',
            animationDelay: (Math.floor(Math.random()*40)-20).toString()+'s',
            animationDuration: Math.floor(10+(7/tempRandomSize)*24).toString()+'s',
          })
        }
      >
      </li>
      )
  }



  return (
    <div>
      <Head>
        <title>Hanz Aquino</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div class="area" >
        <ul class="circles">        
          {animatedShapes}
        </ul>
    </div >

      <main className={styles.main_container}>
      
      <Introduction />

      </main>

    </div>
  )
}