import React, { Component } from 'react';
// import styles from './Sidebar.module.scss'; // Import the SCSS file

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
      <div className="sidebar">
        <h2>File Upload</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fileInput">Select a File:</label>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png, .pdf" // Specify the allowed file types
              onChange={this.handleFileChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sidebar;