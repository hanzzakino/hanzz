import styles from '../../styles/shared/AnimatedBackground.module.css'

import { useState, useEffect } from 'react'
import { useSettingsContext } from '../../context/SettingsContext'

export default function AnimatedBackground({
    speedMultiplier = 1,
    opacity = 0.3,
    maxBlur = 6,
    enableBlur = false,
}) {
    const { screenWidth, windowAvailable, theme } = useSettingsContext()
    const [shapeNumber, setShapeNumber] = useState(0)
    const [animatedShapes, setAnimatedShapes] = useState()

    useEffect(() => {
        setShapeNumber(Math.ceil((screenWidth / 256) * 2))
    }, [windowAvailable])

    useEffect(() => {
        const tempanimatedShapes = []
        for (let i = 0; i < shapeNumber; i++) {
            const randomSize = Math.floor(Math.random() * 15) + 7
            const randomColor = Math.floor(Math.random() * 10) + 240
            const randomColor2 = Math.floor(Math.random() * 80) + 160
            const randomDelay = Math.floor(Math.random() * 80) - 40
            const speedBySize = Math.floor(10 + (7 / randomSize) * 24)
            const blurBySize = enableBlur
                ? Math.floor(maxBlur * (5 / randomSize))
                : 0
            tempanimatedShapes.push(
                <li
                    key={'ashape' + i}
                    className={styles.animationFallRotate}
                    style={{
                        WebkitFilter: 'blur(' + blurBySize + 'px)',
                        MozFilter: 'blur(' + blurBySize + 'px)',
                        OFilter: 'blur(' + blurBySize + 'px)',
                        MsFilter: 'blur(' + blurBySize + 'px)',
                        filter: 'blur(' + blurBySize + 'px)',
                        background:
                            'rgb(10,' + randomColor2 + ',' + randomColor + ')',
                        left: (0.7 + i * (100 / shapeNumber)).toString() + '%',
                        width: randomSize.toString() + 'px',
                        height: randomSize.toString() + 'px',
                        animationDelay:
                            ((1 / speedMultiplier) * randomDelay).toString() +
                            's',
                        animationDuration:
                            (1 / speedMultiplier) * speedBySize.toString() +
                            's',
                        opacity: (theme == 'dark'
                            ? opacity * 0.24
                            : opacity
                        ).toString(),
                        mixBlendMode: theme == 'dark' ? 'lighten' : 'normal',
                    }}
                ></li>
            )
        }
        setAnimatedShapes(tempanimatedShapes)
        // console.log(animatedShapes)
    }, [shapeNumber])

    return (
        <div className={styles.area + ' ' + theme}>
            <ul className={styles.circles}>{animatedShapes}</ul>
        </div>
    )
}
