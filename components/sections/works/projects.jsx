import styles from '../../../styles/sections/Projects.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Project from './project'

export default function Projects() {
    const { theme, setCurrentSection } = useSettingsContext()
    const [thresholdDefault, setThresholdDefault] = useState(0) // vary
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
            imageURLs: [
                '/assets/projects/aicsdb-0.png',
                '/assets/projects/aicsdb-1.png',
            ],
            technologiesUsed: ['nextjs', 'mongodb'],
            link: '',
        },
        {
            title: 'SOrganizer',
            type: 'Web Application',
            description:
                'SOrganizer is a Web Application for organizing school task, activities, and schedules',
            imageURLs: [
                '/assets/projects/sorganizer-0.png',
                '/assets/projects/sorganizer-1.png',
            ],
            technologiesUsed: ['nextjs', 'firebase'],
            link: 'https://sorganizer.vercel.app',
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
                    (isViewed ? ' animation_slideUp100s1' : '')
                }
            >
                <h1 className={styles.title}>
                    My Works<i>.</i>
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
