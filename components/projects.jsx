import styles from '../styles/Projects.module.css'
import { useSettingsContext } from '../context/SettingsContext'
import { useState } from 'react'

export default function Projects() {
    const { theme } = useSettingsContext()
    const projects = [
        {
            title: 'AICS-DB',
            type: 'Web Application',
            description:
                'Created using NextJS and MongoDB, AICS-DB is a Database System for Assistance to individuals in crisis situations (AICS) program of San Jose del Monte City, Bulacan',
            imageURLs: ['', ''],
            technologiesUsed: ['NextJS', 'MongoDB'],
        },
        {
            title: 'SOrganizer',
            type: 'Web Application',
            description:
                'SOrganizer is a Web Application for organizing school task, activities, and schedules',
            imageURLs: ['', ''],
            technologiesUsed: ['NextJS', 'Firebase'],
        },
    ]

    return <div className={styles.container}></div>
}
