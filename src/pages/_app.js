import '@styles/output.scss'
import ShipContext from 'src/context/shipContext'

function MyApp({ Component, pageProps }) {
  return (
    <ShipContext>
    <Component {...pageProps} />
  </ShipContext>
  )
}

export default MyApp
