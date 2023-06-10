import { createContext, useContext, useState, useEffect } from 'react'

const SettingsContext = createContext()

export const SettingsContextWrapper = ({ children }) => {
    const [theme, setTheme] = useState('dark')

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
                ...windowDimensions,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => useContext(SettingsContext)
