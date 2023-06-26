import styles from '../../../styles/sections/Projects.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import FeaturedProject from './featuredProject'
import OtherProject from './otherProject'
import ScrollTrigger from '../../shared/scrollTrigger'

const featuredProjectsList = [
    {
        title: 'AICS-DB',
        type: 'Web Application',
        description:
            'Created using NextJS and MongoDB, AICS-DB is a Database System for Assistance to individuals in crisis situations (AICS) program of CSWD San Jose del Monte City, Bulacan',
        imageURLs: [
            '/assets/projects/aicsdb-0.png',
            '/assets/projects/aicsdb-1.png',
        ],
        technologiesUsed: ['js', 'nextjs', 'mongodb'],
        link: '',
        repo: '',
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
        technologiesUsed: ['js', 'nextjs', 'firebase'],
        link: 'https://sorganizer.vercel.app',
        repo: 'https://github.com/hanzzakino/sorganizer',
    },
    {
        title: 'AmthEx',
        type: 'Desktop Application | Algrotihm',
        description:
            'An algorithm for parsing text to python arithmetic operation',
        imageURLs: [
            '/assets/projects/amthex-0.png',
            '/assets/projects/amthex-1.png',
        ],
        technologiesUsed: ['python', 'pyqt'],
        link: 'https://github.com/hanzzakino/amthex-parser',
        repo: 'https://github.com/hanzzakino/amthex-parser',
    },
]
const otherProjectsList = [
    {
        title: 'S Organizer',
        type: 'Desktop Application',
        description:
            'SOrganizer is a Web Application for organizing school task, activities, and schedules.',
        imageURLs: ['/assets/projects/sorganizer-0.png'],
        technologiesUsed: ['dotnet', 'vb', 'mysql'],
        link: '',
        repo: 'https://github.com/hanzzakino/S-Organizer',
    },
    {
        title: 'RoomSched',
        type: 'Desktop Application',
        description:
            'Room Sched is a database management program that allows a user to manage room occupation.',
        imageURLs: ['/assets/projects/sorganizer-0.png'],
        technologiesUsed: ['dotnet', 'vb', 'sqlite'],
        link: '',
        repo: 'https://github.com/hanzzakino/R-Sched',
    },
    {
        title: 'PNotes',
        type: 'Desktop Application',
        description: 'JavaFx version of Windows Notepad.',
        imageURLs: ['/assets/projects/sorganizer-0.png'],
        technologiesUsed: ['java', 'javafx'],
        link: '',
        repo: 'https://github.com/hanzzakino/PNotes',
    },
    {
        title: 'Processing-projects',
        type: 'Computer Graphics',
        description:
            'Collection of Computer Graphic Simulation using Java Processing Graphic Library',
        imageURLs: ['/assets/projects/sorganizer-0.png'],
        technologiesUsed: ['java', 'javaprocessing'],
        link: '',
        repo: 'https://github.com/hanzzakino/Processing-projects',
    },
]
const featuredProjects = () => {
    const { theme } = useSettingsContext()

    return (
        <div>
            <ScrollTrigger
                section={2}
                animationName="animation_slideUp100s1"
                defaultClassname={styles.titleContainer}
            >
                <h1 className={styles.title}>My Projects</h1>
            </ScrollTrigger>
            <ScrollTrigger
                section={2}
                animationName="animation_slideUp100s1"
                defaultClassname={styles.subtitleContainer}
            >
                <h1 className={styles.subtitle}>
                    <strong>FEATURED</strong> PROJECTS
                </h1>
            </ScrollTrigger>
            <div className={styles.projectsMainContainer}>
                {featuredProjectsList.map((project, index) => (
                    <FeaturedProject
                        key={project.title + '__2000'}
                        index={index}
                        content={project}
                    />
                ))}
            </div>
        </div>
    )
}

const otherProjects = () => {
    const { theme, setCurrentSection } = useSettingsContext()

    return (
        <div>
            <ScrollTrigger
                section={2}
                animationName="animation_slideUp100s1"
                defaultClassname={styles.subtitleContainer}
            >
                <h1 className={styles.subtitle}>
                    <strong>OTHER</strong> PROJECTS
                </h1>
            </ScrollTrigger>

            <div className={styles.otherProjectsMainContainer}>
                {otherProjectsList.map((project, index) => (
                    <OtherProject content={project} key={index} />
                ))}
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className={styles.container}>
            {featuredProjects()}
            {otherProjects()}
        </div>
    )
}
