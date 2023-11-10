import styles from "./teamdetails.css";
import { useState, React, Component } from "react";

import axios from "axios";



const Abstract = () => {

    const [selectedFile, setSelectedFile] = useState(null);

   
  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);
  };

  
  return (
    <div>
      <h1>Upload your abstract</h1>
      <div>
        <input type="file" accept=".ppt, .pptx" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
     
    </div>
  );
};

export default Abstract;
