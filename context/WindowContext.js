import { createContext, useContext, useState, useEffect  } from 'react'

const WindowContext = createContext()

export const WindowContextWrapper = ({children}) =>{
    
    const hasWindow = typeof window !== 'undefined';
     function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    useEffect(() => {
        if (hasWindow) {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    return (
        <WindowContext.Provider value={windowDimensions}>
            {children}
        </WindowContext.Provider>
    );
}

export const useWindowContext = () => useContext(WindowContext)