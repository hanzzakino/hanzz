import { createContext, useContext, useState, useEffect } from 'react'

const SettingsContext = createContext()

export const SettingsContextWrapper = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [sections, setSections] = useState({
        currentSection: 0,
        sectionList: ['Introduction', 'About Me', 'Projects'],
    })

    const setCurrentSection = (viewedSection) => {
        setSections((prevState) => ({
            ...prevState,
            currentSection: viewedSection,
        }))

        // console.log(viewedSection)
    }

    const hasWindow = typeof window !== 'undefined'
    const getWindowDimensions = () => {
        const screenWidth = hasWindow ? window.innerWidth : null
        const screenHeight = hasWindow ? window.innerHeight : null
        return {
            screenWidth,
            screenHeight,
            windowAvailable: hasWindow,
        }
    }
    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions())
            }

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow])
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    return (
        <SettingsContext.Provider
            value={{
                theme,
                setTheme,
                sections,
                setCurrentSection,
                ...windowDimensions,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => useContext(SettingsContext)
