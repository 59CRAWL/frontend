import React, { Component, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Ingestor.module.css'; // Import the CSS file
import axios from 'axios';
import Ship from 'src/class/ships';
import { ShipContext } from 'src/context/shipContext';

const ingestor = () => {
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
    <div className={styles.ingestor}>
      <h2>CSV Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label htmlFor="fileInput">Select a File:</label>
          <input
            type="file"
            id="fileInput"

            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>
        <div className={styles.formgroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ingestor;