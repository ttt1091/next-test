import '../styles/global.scss'
import '../styles/site-001/styles.scss'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}