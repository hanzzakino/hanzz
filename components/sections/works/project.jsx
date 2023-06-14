import { useSettingsContext } from '../../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import styles from '../../../styles/sections/Project.module.css'

export default function Project({ content, index }) {
    const { theme } = useSettingsContext()
    const [thresholdDefault, setThresholdDefault] = useState(0.9) // vary
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: thresholdDefault,
    })
    const [isViewed, setIsViewed] = useState(false)
    useEffect(() => {
        if (inView) {
            setIsViewed((prevState) => true)
            setThresholdDefault(0.1)
        }
    }, [inView])

    return (
        <div
            className={
                styles.container + (isViewed ? ' uhiddenOp' : ' hiddenOp')
            }
            ref={ref}
        >
            <div>
                <h1>{content.title}</h1>
                {isViewed.toString()}
            </div>
        </div>
    )
}
