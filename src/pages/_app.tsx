import ChallengesProvider from '../contexts/ChallengesContext'
import CountDownProvider from '../contexts/CountDownContext'
import '../styles/global.css'



function MyApp({ Component, pageProps }) {

  return (
    <CountDownProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </CountDownProvider>
  )
}

export default MyApp
