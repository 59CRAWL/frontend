import Head from 'next/head';
import Layout from '@components/Layout';

import React, { Component, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// import PortMockData from 'src/mockdata/port_mock_data.csv';

import axios from 'axios';
import Ship from 'src/class/ships';
import { ShipContext } from 'src/context/shipContext';

export default function Home() {
  const router = useRouter();

  const { message, setMessage } = useContext(ShipContext);
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
      axios.post("http:", newFormData, { headers }).then((response) => {
          // Convert response string to a JSON object
          const sanitizedJsonString = response.data.replace(/:\s*NaN/g, ': null');
          var temp = JSON.parse(sanitizedJsonString);

          // Convert JSON object to a list of `Ships`
          var shipsArray = [];
          for (var item of temp) {
            shipsArray.push(Ship.builder(item));
          }
          
          // Set context for `Ships`
          setMessage(shipsArray);
        }
      ).finally(() => {
        router.push('/simulate')
      });
    } else {
      alert('Please select a file before submitting.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>059CRAWL</title>
        <meta name="description" content="PSA Codesprint 2023" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>

      <center>
      <div>
        <h1 className='py-4 font-bold'>Welcome to our App!</h1>
        <p className='itext'> This app takes in your shipping schedules, and predicts potential delays, suggest resources allocation, and simulate shipping routes!</p>
        <h2 className='py-2'>Upload your CSV here:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fileInput"></label>

            <input
              type="file"
              id="fileInput"
              // make width smaller
              style={{ width: 300 }}

              onChange={(e) => setFile(e.target.files?.[0])}
            />
            <button type="submit">Submit</button>
          </div>
        </form>

        <h2 className='py-2'> Don't have a CSV file?</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fileInput"></label>

          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </center>
      
    </Layout>
  )
}
