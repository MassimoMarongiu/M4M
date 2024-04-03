import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]); // Set the selected file when input changes
  }

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => { setData(res.data[0]) })
      .catch(err => console.log(err));
  }, []);
  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios.post("http://localhost:3001/fileUpload", formData)
      .then(res => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
        } else {
          console.log("Failed");
        }
      });
  };

  return (
    <div className='containerFile'>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
      <br>
      </br>
               {/* {!selectedFile && (
                  <div>
                    <label htmlFor="postTitle">Inserisci immagine:</label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      accept=".jpg"
                    />
                  </div>
                )} */}
                {selectedFile && (
                  <img
                    id="preview"
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                  />
                )}
      {/* <img src={URL.createObjectURL(selectedFile)} alt='' style={{width:"500px", height:"500px"}}></img> */}
      {/* <img src={'http://localhost:3001/images'} alt='' style={{width:"500px", height:"500px"}}></img> */}
    </div>
  )
}

export default FileUpload;
