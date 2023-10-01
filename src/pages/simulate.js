import Head from 'next/head';

import Layout from '@components/Layout';
import Map from '@components/Map';

import styles from '@styles/Home.module.scss';
import RoutingMachine from '../components/Routing';
import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

const DEFAULT_CENTER = [1.262822, 103.786229]

export default function Simulate() {
  const { message } = useContext(ShipContext)

  console.log(message)

  return (
    <Layout>

      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TileLayer is the background of the map itself */}
      <Map className={styles.homeMap} width="500" height="200" center={DEFAULT_CENTER} zoom={15}>
        {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              /> */}
        {
          ({ TileLayer }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {
                message.map((num, index) => {
                  return <RoutingMachine />
                })
              }
            </>
          )
        }
      </Map>

    </Layout>
  )
}
