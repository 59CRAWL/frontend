import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';
import Sidebar from '@components/Sidebar/Sidebar';
import Navbar from '../components/Navbar';
import Charts from '../components/Charts/Charts';

const DEFAULT_CENTER = [1.357822, 103.813229]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Sidebar/>
        
        <Container>

          <Map className={styles.homeMap} width="500" height="200" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
          <Charts/>
        </Container>
      </Section>
    </Layout>
  )
}
