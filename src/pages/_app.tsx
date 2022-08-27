import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
