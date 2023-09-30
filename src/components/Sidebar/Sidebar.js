import React, { Component, useContext } from 'react';
import styles from './Sidebar.module.css'; // Import the CSS file
import axios from 'axios';
import Ship from '@components/ships';
import { Message_data } from 'src/context/shipContext';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };

  }

  handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    this.setState({ selectedFile });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedFile } = this.state;
    //var shipsarray = useContext(shipsContext);

    if (selectedFile) {
      // You can perform further actions with the selected file here.
      var newFormData = new FormData();
      newFormData.append('file', selectedFile)
      console.log('Selected file:', selectedFile);
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

          }
        )
      
    } else {
      alert('Please select a file before submitting.');
    }
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <h2>CSV Upload</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="fileInput">Select a File:</label>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png, .pdf" // Specify the allowed file types
              onChange={this.handleFileChange}
            />
          </div>
          <div className={styles.formgroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sidebar;