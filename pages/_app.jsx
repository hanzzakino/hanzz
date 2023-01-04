import '../styles/globals.css'
import { WindowContextWrapper } from '../context/WindowContext.js' 
function MyApp({ Component, pageProps }) {
  return(
  <WindowContextWrapper>
    <Component {...pageProps} />
  </WindowContextWrapper>
  )
}

export default MyApp
