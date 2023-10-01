import Head from 'next/head';

import Layout from '@components/Layout';
import Map from '@components/Map';

import styles from '@styles/Home.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ShipContext } from 'src/context/shipContext';
import RoutingMachine from '@components/Routing/RoutingMachine';

const DEFAULT_CENTER = [1.262822, 103.786229]

const BERTH_LOCATIONS = [
  [1.265965, 103.791287],
  [1.263637, 103.789964],
  [1.261416, 103.788667],
  [1.259115, 103.787265],
  [1.256919, 103.785943],
  [1.260516, 103.780043],
  [1.262738, 103.781286],
  [1.264933, 103.782688],
  [1.267235, 103.784011],
  [1.269562, 103.785334],
]

const SPAWN_LOCATIONS = [
  [1.244365, 103.800155],
  [1.243729, 103.794745],
  [1.243274, 103.791198],
  [1.242456, 103.785242],
  [1.243456, 103.783105],
  [1.251593, 103.767828],
  [1.252866, 103.763327],
  [1.253275, 103.759053],
  [1.254684, 103.749505],
  [1.259184, 103.747504],
]

var counter = 1;

var removedShips = []

export default function Simulate() {
  const { message } = useContext(ShipContext)
  
  const [shipsShowing, setShipsShowing] = useState(message? [message[0]]: [])

  

  function nextShip() {
    if (!message) {
      // console.log('no ships');
      return;
    }
    if (counter >= message.length) {
      return;
    }
    // console.log(shipsShowing);
    var newShipsShowing = [...shipsShowing]
    const index = newShipsShowing.findIndex((ship) => message[counter].berth == ship.berth)
        // console.log(index)
    // console.log(message[counter].vesselName)
    if (index == -1) {
      newShipsShowing.push(message[counter]);
    } else {
      removedShips.push({index: index, ship: newShipsShowing[index]})
      newShipsShowing[index] = message[counter]
    }
    counter += 1;
    setShipsShowing(newShipsShowing);
    // console.log(message)
    // console.log(shipsShowing)
    // console.log(removedShips)
    // console.log('updated array')
  }

  // function previousShip() {
  //   if (!message) {
  //     console.log('no ships');
  //     return;
  //   }
  //   console.log(counter);
  //   if (removedShips[-1].index)
  //   if (shipsShowing.length == counter) {
  //     console.log('remove ship');
  //   } else {
  //     console.log('replace with previous ship')
  //   }
  // }

  return (
    <Layout className={styles.layout}>

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
                 shipsShowing.map((ship, index) => {
                    return <RoutingMachine key={ship.id} end={BERTH_LOCATIONS[ship.berth-1]} ship={ship}/>
                })
              }
            </>
          )
        }
      </Map>
      
      <div className={styles.bottomContainer}>
        <div className={styles.leftButtons}>
          {/* <button className={styles.simulateButton} onClick={previousShip}> Previous ship</button> */}
          <button className={styles.simulateButton} onClick={nextShip}> Next ship</button>
          <h3>ETA: {message? message[counter-1].eta: null}</h3>
        </div>
      </div>

      

    </Layout>
  )
}
