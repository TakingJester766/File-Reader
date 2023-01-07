// Create a react component that uses antd framework, where there is a file input button where you can upload a file. The file is then uploaded and read, where the length is returned. 

import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const App = () => {
  const [fileList, setFileList] = useState([]);

  const props = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: file => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  return (
    <Upload {...props}>
      <button>
        <UploadOutlined /> Click to Upload
      </button>
    </Upload>
  );
}

export default App;

