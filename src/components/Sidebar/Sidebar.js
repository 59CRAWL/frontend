import React, { Component, useContext, useState } from 'react';
import styles from './Sidebar.module.css'; // Import the CSS file
import axios from 'axios';
import Ship from '@components/ships';
import { Message_data } from 'src/context/shipContext';

const Sidebar = () => {
  console.log('build sidebar')
  const { message, setMessage } = useContext(Message_data);
  const [file,setFile] = useState()
  // handleFileChange = (e) => {
  //   selectedFile = e.target.files[0];
  // };

  function handleSubmit (e) {
    // console.log(e)
    e.preventDefault();
    // const { selectedFile } = this.state;
    //var shipsarray = useContext(shipsContext);

    if (file) {
      // You can perform further actions with the selected file here.
      var newFormData = new FormData();
      newFormData.append('file', file)
      // console.log('Selected file:', selectedFile);
      axios.post("http://127.0.0.1:5000/ingestor", newFormData).then(
        (response) => {
          
          var temp = response.data;
          // console.log(temp);
          var shipsarray = [];
          
          for (var item of temp) {
            // console.log(item);
            shipsarray.push(new Ship(item.shipId, item.ETA, item.ETD, item.Berth));
          }
          // console.log(shipsarray);
          
          
          setMessage(shipsarray);
          console.log(shipsarray)

          }
        )
      
    } else {
      alert('Please select a file before submitting.');
    }
  };

  // render() {
    return (
      <div className={styles.sidebar}>
        <h2>CSV Upload</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="fileInput">Select a File:</label>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png, .pdf" // Specify the allowed file types
              onChange={(e)=> setFile(e.target.files?.[0])}
            />
          </div>
          <div className={styles.formgroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
// }

export default Sidebar;