import styles from '../../styles/shared/AnimatedBackground.module.css'


export default function AnimatedBackground({enableBlur=false}) {

    const animatedShapes = []
    const shapeNumber = 40
    for(let i=0; i<shapeNumber; i++){
      const tempRandomSize = Math.floor(Math.random()*15)+7
      const tempRandomColor = Math.floor(Math.random()*10)+240
      const tempRandomColor2 = Math.floor(Math.random()*80)+160
      const tempRandomDelay = (Math.floor(Math.random()*40)-20)
      const tempSpeedBySize = Math.floor(10+(7/tempRandomSize)*24)
      const tempBlurBySize = enableBlur ? Math.floor(6*(5/tempRandomSize)):0
      animatedShapes.push(
        <li 
          key={'ashape'+i}
          style={
            ({
              WebkitFilter: 'blur('+tempBlurBySize+'px)',
              MozFilter: 'blur('+tempBlurBySize+'px)',
              OFilter: 'blur('+tempBlurBySize+'px)',
              MsFilter: 'blur('+tempBlurBySize+'px)',
              filter: 'blur('+tempBlurBySize+'px)',
              background: 'rgb(10,'+tempRandomColor2+','+tempRandomColor+')',
              left: (0.7+(i*(100/shapeNumber))).toString()+'%',
              width: tempRandomSize.toString()+'px',
              height: tempRandomSize.toString()+'px',
              animationDelay: tempRandomDelay.toString()+'s',
              animationDuration: tempSpeedBySize.toString()+'s',
            })
          }
        >
        </li>
        )
    }

    return (
        <div class={styles.area} >
        <ul class={styles.circles}>        
            {animatedShapes}
        </ul>
        </div >
    )
}