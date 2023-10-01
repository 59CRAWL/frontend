import '@styles/output.scss'
import ShipContextProvider from 'src/context/shipContext'

function MyApp({ Component, pageProps }) {
  return (
    <ShipContextProvider>
      <Component {...pageProps} />
    </ShipContextProvider>
  )
}

export default MyApp
