import styles from '../../styles/Projects.module.css'
import { useSettingsContext } from '../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Project from './projects-components/project'

export default function Projects() {
    const { theme, setCurrentSection } = useSettingsContext()
    const [thresholdDefault, setThresholdDefault] = useState(0.2) // vary
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: thresholdDefault,
    })
    const [isViewed, setIsViewed] = useState(false)
    useEffect(() => {
        if (inView) {
            setIsViewed((prevState) => true)
            setCurrentSection(2) // vary
            setThresholdDefault(0.1)
        }
    }, [inView])

    const projectList = [
        {
            title: 'AICS-DB',
            type: 'Web Application',
            description:
                'Created using NextJS and MongoDB, AICS-DB is a Database System for Assistance to individuals in crisis situations (AICS) program of San Jose del Monte City, Bulacan',
            imageURLs: ['', ''],
            technologiesUsed: ['nextjs', 'mongodb'],
        },
        {
            title: 'SOrganizer',
            type: 'Web Application',
            description:
                'SOrganizer is a Web Application for organizing school task, activities, and schedules',
            imageURLs: ['', ''],
            technologiesUsed: ['nextjs', 'firebase'],
        },
    ]

    return (
        <div
            className={
                styles.container + (isViewed ? ' uhiddenOp' : ' hiddenOp')
            }
            ref={ref}
        >
            <div
                className={
                    styles.titleContainer +
                    (isViewed ? ' animation_slideUp100s1 aimation_delay12' : '')
                }
            >
                <h1 className={styles.title}>
                    My Projects<i>.</i>
                </h1>
                {/* <div className={styles.intro}>
                    Driven by fascination and curiosity about how a computer
                    works, I started to learn programming in 2017. I was amazed
                    by the idea that I could instruct a computer to do certain
                    task. I loved the challenge of analytical and mathematical
                    problem solving, and I found programming as a great tool for
                    that.
                </div> */}
            </div>
            <div className={styles.projectsMainContainer}>
                {projectList.map((project, index) => (
                    <Project
                        key={project.title + '__'}
                        index={index}
                        content={project}
                    />
                ))}
            </div>
        </div>
    )
}
