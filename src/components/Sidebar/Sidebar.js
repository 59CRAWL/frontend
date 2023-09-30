import React, { Component } from 'react';
import styles from './Sidebar.module.css'; // Import the CSS file

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

    if (selectedFile) {
      // You can perform further actions with the selected file here.
      console.log('Selected file:', selectedFile);
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