import { useSettingsContext } from '../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function ScrollTrigger({
    children,
    initialThresholdValue = 0,
    thresholdValue = 0,
    animationName = 'animation_slideUp100s1',
    animationDelay = 0,
    section,
    defaultClassname,
}) {
    const { theme, setCurrentSection } = useSettingsContext()
    const [thresholdDefault, setThresholdDefault] = useState(
        initialThresholdValue
    )
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: thresholdDefault,
        delay: animationDelay * 1000,
    })
    const [isViewed, setIsViewed] = useState(false)
    useEffect(() => {
        if (inView) {
            setIsViewed((prevState) => true)
            setCurrentSection(section)
            setThresholdDefault(thresholdValue)
        }
    }, [inView])
    return (
        <div
            className={
                defaultClassname +
                (isViewed ? ' uhiddenOp ' + animationName + ' ' : ' hiddenOp ')
            }
            ref={ref}
        >
            {children}
        </div>
    )
}
