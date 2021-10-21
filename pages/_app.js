import '../styles/globals.scss'
import 'normalize.css'
import PageLayout from '../components/PageLayout'

function MyApp({ Component, pageProps }) {
  return <PageLayout><Component {...pageProps} /></PageLayout>
}

export default MyApp
