import Head from 'next/head';

import Layout from '@components/Layout';
import Map from '@components/Map';

import styles from '@styles/Home.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ShipContext } from 'src/context/shipContext';
import RoutingMachine from '@components/Routing/RoutingMachine';
import { FaPause, FaPlay } from 'react-icons/fa';


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

export default function Simulate() {
  const { ships } = useContext(ShipContext);

  // An array of what berth belongs in which berth
  // This will be at MOST 10
  const [shipsArray, setShipsArray] = useState(ships ? [ships[0]] : []);
  const [counter, setCounter] = useState(1);

  const [shipsPlaying, setShipsPlaying] = useState(false);

  function nextShip() {
    // Verify if ships have not run out or exists
    if (!ships) {
      return;
    }
    if (counter >= ships.length) {
      return;
    }

    // Get the next ship
    const newShip = ships[counter]

    // Get the existing ship at the berth
    const existingShipIndex = shipsArray.findIndex((ship) => ship.berth === newShip.berth)

    // If there is no existing ship, add the new ship to the array
    if (existingShipIndex === -1) {
      setShipsArray([...shipsArray, newShip])
    } else {
      const updatedShipsArray = [...shipsArray];
      updatedShipsArray[existingShipIndex] = newShip;
      setShipsArray(updatedShipsArray)
    }

    setCounter(counter + 1);
  }

  // Set that the play button is going
  function playShips() {
    if (ships)
      setShipsPlaying((prevIsUpdating) => !prevIsUpdating);
  }

  useEffect(() => {
    if (shipsPlaying) {
      nextShip()
    }
  }, [shipsPlaying])

  useEffect(() => {
    let intervalId;

    if (shipsPlaying) {
      intervalId = setInterval(() => {
        nextShip();
      }, 2000)
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    }
  }, [shipsArray])

  if (ships) {
    return (
      <Layout className={styles.layout}>

        <Head>
          <title>059CRAWL</title>
          <meta name="description" content="PSA Codesprint 2023" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* TileLayer is the background of the map itself */}
        <center>
          <h1 className='sheader'>
            PSA Port Map
          </h1>
        </center>
        <Map className={styles.homeMap} width="500" height="500" center={DEFAULT_CENTER} zoom={15}>
          {
            ({ TileLayer }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                  shipsArray.map((ship, index) => {
                    return <RoutingMachine key={ship.id} end={BERTH_LOCATIONS[ship.berth - 1]} ship={ship} />
                  })
                }
              </>
            )
          }
        </Map>

        <div className={styles.bottomContainer}>
          <div className={styles.leftButtons}>
            {/* <button className={styles.simulateButton} onClick={previousShip}> Previous ship</button> */}
            <button className={styles.simulateButton} onClick={nextShip}>Next ship</button>
            <button className={styles.simulateButton} onClick={playShips}>
              {
                shipsPlaying ? <FaPause /> : <FaPlay />
              }
            </button>
            <h3>ETA: {ships ? ships[counter - 1].eta : null}</h3>
          </div>
        </div>
      </Layout>
    )
  }

  else {
    return (
      <Layout className={styles.layout}>

        <Head>
          <title>059CRAWL</title>
          <meta name="description" content="PSA Codesprint 2023" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <center className='bg ycenter'>
          <h1 className='fontcolor font-bold'>
            Please upload a file to continue.
          </h1>
        </center>
      </Layout>
    );
  }
}
