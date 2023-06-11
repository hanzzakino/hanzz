import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function AnimatedView({ children, animation, threshold }) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: threshold,
    })

    return (
        <div ref={ref}>
            {inView ? <span className={animation}>{children}</span> : ''}
        </div>
    )
}
