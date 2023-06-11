import '../styles/globals.css'
import { SettingsContextWrapper } from '../context/SettingsContext.js'

function MyApp({ Component, pageProps }) {
    return (
        <SettingsContextWrapper>
            <Component {...pageProps} />
        </SettingsContextWrapper>
    )
}

export default MyApp
