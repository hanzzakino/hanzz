import '../styles/globals.css'
import '../styles/animations.css'
import { SettingsContextWrapper } from '../context/SettingsContext.js'

import { primaryFont } from '../utils/googleFonts'

function MyApp({ Component, pageProps }) {
    return (
        <SettingsContextWrapper>
            <main className={primaryFont.className}>
                <Component {...pageProps} />
            </main>
        </SettingsContextWrapper>
    )
}

export default MyApp
