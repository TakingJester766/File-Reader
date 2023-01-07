// Create a react component that uses antd framework, where there is a file input button where you can upload a file. There is a button that when clicked, it will send the file to the server. The server will then return a response that will be displayed on the page. This response will simply be the number of characters present in the document.

import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('http://localhost:5000/upload', formData)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        message.error('Error uploading file');
      });
  };

  return (
    <div>
      
      <Button icon={<UploadOutlined />}/>
      
      <input type="file" onChange={handleFile} />
      <Button onClick={handleUpload}>Upload</Button>
      <p>{response}</p>
    </div>
  );
}

export default App;