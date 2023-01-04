import styles from '../../styles/shared/AnimatedBackground.module.css'

import { useState, useEffect } from 'react'
import {useWindowContext} from '../../context/WindowContext'

export default function AnimatedBackground({speedMultiplier=1, opacity=0.3, maxBlur=6,enableBlur=false}) {
  const { width } = useWindowContext()
  const [shapeNumber,setShapeNumber] = useState()
  const animatedShapes = []

  useEffect(() => {
    setShapeNumber(Math.ceil((width/32)*2))
  },[width])

  for(let i=0; i<shapeNumber; i++){
    const randomSize = (Math.floor(Math.random()*15)+7)
    const randomColor = (Math.floor(Math.random()*10)+240)
    const randomColor2 = (Math.floor(Math.random()*80)+160)
    const randomDelay = (Math.floor(Math.random()*80)-40)
    const speedBySize = (Math.floor(10+(7/randomSize)*24))
    const blurBySize = (enableBlur ? Math.floor(maxBlur*(5/randomSize)):0)
    animatedShapes.push(
        <li 
        key={'ashape'+i}
        style={
          ({
            WebkitFilter: 'blur('+blurBySize+'px)',
            MozFilter: 'blur('+blurBySize+'px)',
            OFilter: 'blur('+blurBySize+'px)',
            MsFilter: 'blur('+blurBySize+'px)',
            filter: 'blur('+blurBySize+'px)',
            background: 'rgb(10,'+randomColor2+','+randomColor+')',
            left: (0.7+(i*(100/shapeNumber))).toString()+'%',
            width: randomSize.toString()+'px',
            height: randomSize.toString()+'px',
            animationDelay: ((1/speedMultiplier)*randomDelay).toString()+'s',
            animationDuration: ((1/speedMultiplier)*speedBySize.toString())+'s',
            opacity: opacity.toString()
          })
        }
      >
      </li>
    )
  }

  

  return (
      <div className={styles.area} >
      <ul className={styles.circles}>
        {/* <h1>{shapeNumber} {animatedShapes.length}</h1> */}

          {animatedShapes}
      </ul>
      </div >
  )
}