import Head from 'next/head';
import Layout from '@components/Layout';

import React, { Component, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import Ship from 'src/class/ships';
import { ShipContext } from 'src/context/shipContext';

export default function Home() {
  const router = useRouter();

  const { ships, setShips } = useContext(ShipContext);
  const [file, setFile] = useState()

  function handleSubmit(e) {
    e.preventDefault();

    if (file) {
      // You can perform further actions with the selected file here.
      var newFormData = new FormData();
      newFormData.append('file', file)
      // console.log('Selected file:', selectedFile);
      const headers = {
        'Content-Type': 'application/json',
      };
      axios.post("http://127.0.0.1:5000/ingestor", newFormData, { headers }).then((response) => {
        // Convert response string to a JSON object
        const sanitizedJsonString = response.data.replace(/:\s*NaN/g, ': null');
        var temp = JSON.parse(sanitizedJsonString);

        // Convert JSON object to a list of `Ships`
        var shipsArray = [];
        for (var item of temp) {
          shipsArray.push(Ship.builder(item));
        }

        // Set context for `Ships`
        setShips(shipsArray);
      }
      ).finally(() => {
        router.push('/simulate')
      });
    } else {
      alert('Please select a file before submitting.');
    }
  };

  function handleClick() {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios.post("http://127.0.0.1:5000/ingestor", { headers }).then((response) => {
      // Convert response string to a JSON object
      const sanitizedJsonString = response.data.replace(/:\s*NaN/g, ': null');
      var temp = JSON.parse(sanitizedJsonString);

      // Convert JSON object to a list of `Ships`
      var shipsArray = [];
      for (var item of temp) {
        shipsArray.push(Ship.builder(item));
      }

      // Set context for `Ships`
      setShips(shipsArray);
    }
    ).finally(() => {
      router.push('/simulate')
    });
  }

  return (
    <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>

      <center>
        <div className='icontainer'>
          <h2 className='iheader py-2 font-bold'>Welcome to our Web Application!</h2>
          <p className='itext'> This app takes in your <span className='font-bold'>shipping schedules</span>, predicts <span className='font-bold'>potential delays</span>, suggests <span className='font-bold'>resource allocation</span>, and <span className='font-bold'>simulate shipping routes!</span></p>
          <div className='outline'>
            <h2 className='fontcolor'>Upload your CSV here:</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fileInput"></label>
              <input
                type="file"
                id="fileInput"
                // make width smaller
                style={{ width: 300 }}

                onChange={(e) => setFile(e.target.files?.[0])}
              />
              <button type="submit">Submit</button>
            </form>
            <h2 className='py-6 fontcolor'> Don't have a CSV file?</h2>
            <button type="submit" onClick={handleClick}>Click to use our dummy data!</button>
          </div>
        </div>

      </center>

    </Layout>
  )
}
